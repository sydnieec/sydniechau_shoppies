import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

//class to map the claims
class SearchedMovies extends Component {
  render() {
    return (
      <div>
        <h1>Search Results</h1>
        {this.props.searchedMovieList.map((searchedMovie) => (
          <SearchedMovie
            key={searchedMovie.id}
            onNominate={this.props.onNominate}
            searchedMovie={searchedMovie}
          />
        ))}
      </div>
    );
  }
}

export default SearchedMovies;

//class for what an indivdual claim would look like
class SearchedMovie extends Component {
  render() {
    return (
      <div class="d-flex justify-content-between">
        <div>
          <span style={{ fontsize: 30 }}>
            {this.props.searchedMovie.name} , {this.props.searchedMovie.year},{" "}
            {this.props.searchedMovie.id}
          </span>
        </div>
        <div>
          <button
            onClick={() =>
              this.props.onNominate(
                this.props.searchedMovie.name,
                this.props.searchedMovie.year,
                this.props.searchedMovie.id
              )
            }
            className="btn btn-success btn-sm m-2"
          >
            Nominate
          </button>
          {/* <button
            onClick={() => this.props.onDelete(this.props.searchedMovie.year)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete Claim
          </button> */}
        </div>
      </div>
    );
  }
}
