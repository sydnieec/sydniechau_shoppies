import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchedMovies from "./movies";
import axios from "axios";
import Nominations from "./nominations";
import "./App.css";

//Main page for Shoppies 
class App extends Component {
  state = {
    searchedMovieList: [],
    nominationsList: [],
    currentIdList: [],
    searchField: "",
    visited: false,
    url: "https://www.omdbapi.com/?apikey=f7b87fd5&s=",
    searchResultFor: "",
  };



  //sends a API get request to OMDB Api and retrieve a list of serach results 
  addurl = (customUrl) => {
    axios
      .get(this.state.url + customUrl)
      .then((response) => {
        //fetched searched movie list and set it to current searchedmovielist
        var newSearchedMovieList = [];
        for (let i = 0; i < response.data.Search.length; i++) {
          newSearchedMovieList.push({
            id: response.data.Search[i].imdbID,
            name: response.data.Search[i].Title,
            year: response.data.Search[i].Year,
          });
        }
        this.setState({ searchedMovieList: newSearchedMovieList });
      })
      .catch((error) => {
        console.log(error);
        //Sends an alert message to the user if response is an error
        alert(
          "No search results/too many search results. Please refine your search."
        );
      });
  };



  //Called when search button is clicked, that calls addURL with text that was in the serach bar 
  handleSubmit = (event) => {
    this.addurl(this.state.searchField);
    event.preventDefault();
    this.setState({
      searchResultFor: " for " + "'" + this.state.searchField + "'",
      searchField: "",
    });
  };



  //Used to constantly update state of search fieild to what is in the search bar 
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };



  //Called from nominations.jsx whenever delete button is clicked 
  handleDelete = (movieId) => {
  //delete movie from current list of nominatations and list of ids 
    var nominationsList = this.state.nominationsList.filter(
      (c) => c.id !== movieId
    );
    var currentIdList = this.state.currentIdList.filter((c) => c !== movieId);

    //Stores CurrendIdList and NominationList to local cache 
    var local_currentIdList = JSON.stringify(currentIdList);
    var local_nominationsList = JSON.stringify(nominationsList);
    localStorage.setItem("localcurrentIdList", local_currentIdList);
    localStorage.setItem("localnominationsList", local_nominationsList);

    this.setState({ currentIdList });
    this.setState({ nominationsList });
  };

    

  //Called from Movies.jsx whenever nominated button is clicked to added to nominationsList
  onNominate = (movie, year, id) => {
    this.state.nominationsList.push({
      id: id,
      name: movie,
      year: year,
    });
    this.state.currentIdList.push(id);

    var visited = this.state.currentIdList.length > 0;
    localStorage.setItem("visited", visited);
    this.setState({
      visited: visited,
    });
    var local_currentIdList = JSON.stringify(this.state.currentIdList);
    var local_nominationsList = JSON.stringify(this.state.nominationsList);
    localStorage.setItem("localcurrentIdList", local_currentIdList);
    localStorage.setItem("localnominationsList", local_nominationsList);
    this.setState({
      nominationsList: this.state.nominationsList,
    });
    this.setState({ currentIdList: this.state.currentIdList });
    this.setState({ visited: true });
    console.log("ADDED", this.state.nominationsList, this.state.currentIdList);
  };



//Checks if user has visited before and retrieve information from local storage to set to current state
  componentDidMount() {
    const visited = localStorage.getItem("visited") === "true";
    if (visited) {
      const localnominationsList = localStorage.getItem("localnominationsList");
      const localcurrentIdList = localStorage.getItem("localcurrentIdList");
      var thisnominationsList = JSON.parse(localnominationsList);
      var thiscurrentIdList = JSON.parse(localcurrentIdList);
      this.setState({
        nominationsList: thisnominationsList,
        currentIdList: thiscurrentIdList,
      });
      console.log(
        "REFRESH",
        this.state.nominationsList,
        this.state.currentIdList
      );
    }
  }

  render() {

    //Banner that appear only when user has reached their limit of 5 nominations 
    let banner;
    if (this.state.currentIdList.length >= 5) {
      banner = (
        <div style={{ color: "#11cbd7" }}>
          <h1
            style={{ color: "#3c6947", fontWeight: "bold" }}
            className="text-center mt-2"
          >
            You have finished Nominations!
          </h1>
        </div>
      );
    }

    return (
      <div style={{ divStyle }} className="Main">
        <h1
          style={{
            fontWeight: "bold",
            backgroundColor: "#aeecae",
            color: "##126e12",
            paddingBottom: "1%",
          }}
          className="text-center mt-2"
        >
          The Shoppies
        </h1>
        
        {/* Form that submits search results to API calls  */}
        <Form
          className="searchBar"
          style={divStyle}
          onSubmit={this.handleSubmit}
        >
          <Form.Group>
            <Form.Label> Movie Title</Form.Label>
            <Form.Control
              type=""
              placeholder="Search for movie..."
              onChange={this.handleChange}
              value={this.state.searchField}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>



        {banner}

        {/* Components for Search Results and Nominations List  */}
        <div className="rows">
          <SearchedMovies
            className="row"
            onNominate={this.onNominate}
            searchedMovieList={this.state.searchedMovieList}
            currentIdList={this.state.currentIdList}
            searchResultFor={this.state.searchResultFor}
          />
          <Nominations
            className="row"
            onDelete={this.handleDelete}
            nominationsList={this.state.nominationsList}
          />
        </div>
      </div>
    );
  }
}

export default App;


//For styling divs 
const divStyle = {
  marginTop: "3%",
  marginLeft: "20%",
  marginRight: "20%",
  padding: "1%",
};
