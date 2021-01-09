import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchedMovies from "./movies";
import axios from "axios";
import Nominations from "./nominations";

//component in charge of handling new items being added to the cart
class App extends Component {
  state = {
    searchedMovieList: [],
    nominationsList: [],
    currentIdList: [],
    searchField: "",
    visited: false,
    url: "https://www.omdbapi.com/?apikey=f7b87fd5&s=",
  };

  //sends a API post request to local server retreive product name and price
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
        alert(error);
      });
  };

  handleSubmit = (event) => {
    this.addurl(this.state.searchField);
    event.preventDefault();
    this.setState({
      searchField: "",
    });
  };

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  handleDelete = (movieId) => {
    //delete movie from current list of nominatations
    var nominationsList = this.state.nominationsList.filter(
      (c) => c.id !== movieId
    );

    //delete movie from current list of ids held
    var currentIdList = this.state.currentIdList.filter((c) => c !== movieId);

    var local_currentIdList = JSON.stringify(currentIdList);
    var local_nominationsList = JSON.stringify(nominationsList);

    localStorage.setItem("localcurrentIdList", local_currentIdList);
    localStorage.setItem("localnominationsList", local_nominationsList);

    this.setState({ currentIdList });
    this.setState({ nominationsList });
  };

  onNominate = (movie, year, id) => {
    //add nominations from searched movies to nominations list
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
    let banner;
    if (this.state.currentIdList.length >= 5) {
      banner = (
        <div style={{ color: "#11cbd7" }}>
          <h1
            style={{ color: "#fffff", fontWeight: "bold" }}
            className="text-center mt-2"
          >
            You have finished Nominations!
          </h1>
        </div>
      );
    }

    return (
      // form to add item
      <React.Fragment>
        <h1 style={{ fontWeight: "bold" }} className="text-center mt-2">
          The Shoppies
        </h1>
        {banner}
        <Form onSubmit={this.handleSubmit}>
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
        <SearchedMovies
          onNominate={this.onNominate}
          searchedMovieList={this.state.searchedMovieList}
          currentIdList={this.state.currentIdList}
        />
        <Nominations
          onDelete={this.handleDelete}
          nominationsList={this.state.nominationsList}
        />
        {/* <p>WOAH{this.state.nominationsList} </p> */}
      </React.Fragment>
    );
  }
}

export default App;
