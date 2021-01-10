import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

//class to map the claims
class SearchedMovies extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "3%",
          marginLeft: "10%",
          marginRight: "10%",
          padding: "1%",
        }}
        className="searchedMovies"
      >
        <h1>Search Results {this.props.searchResultFor}</h1>
        {this.props.searchedMovieList.map((searchedMovie) => (
          <SearchedMovie
            key={searchedMovie.id}
            onNominate={this.props.onNominate}
            searchedMovie={searchedMovie}
            currentIdList={this.props.currentIdList}
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
    let button;
    //this.props.nominationsList.includes(this.props.searchedMovie)
    if (
      this.props.currentIdList.includes(this.props.searchedMovie.id) ||
      this.props.currentIdList.length >= 5
    ) {
      button = <DisabledButton />;
    } else {
      button = (
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
      );
    }
    return (
      <div class="d-flex justify-content-between">
        <div>
          <span style={{ fontsize: 30 }}>
            {this.props.searchedMovie.name} - {this.props.searchedMovie.year}
          </span>
        </div>

        <div>{button}</div>
      </div>
    );
  }
}

function ActiveButton(props) {
  return (
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
  );
}

function DisabledButton(props) {
  return (
    <button type="button" class="btn btn-secondary btn-sm m-2" disabled>
      Nominate
    </button>
  );
}
