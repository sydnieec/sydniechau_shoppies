import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchedMovies from "./movies";
import axios from "axios";

//component in charge of handling new items being added to the cart
class App extends Component {
  state = {
    searchedMovieList: [],
    nominationsList: [],
    searchField: "",
    url: "http://www.omdbapi.com/?apikey=f7b87fd5&s=",
    yo: "hi",
  };
  //sends a API post request to local server retreive product name and price
  addurl = (customUrl) => {
    axios
      .get(this.state.url + customUrl)
      .then((response) => {
        console.log("YO", response);
        console.log("YO", response.data.Search[0].Title);
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

  render() {
    return (
      // form to add item
      <React.Fragment>
        <h1 style={{ fontWeight: "bold" }} className="text-center mt-2">
          The Shoppies
        </h1>

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
            Search!
          </Button>
          <p>{this.state.yo}</p>
        </Form>
        <SearchedMovies searchedMovieList={this.state.searchedMovieList} />
        {/* <Nominations nominationsList={this.state.nominationsList} /> */}
      </React.Fragment>
    );
  }
}

export default App;
