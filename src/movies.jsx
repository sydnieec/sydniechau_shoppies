import React, { Component } from "react";

//class to map SearchedMovies 
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
        {/* maps search results indivdually to SearchedMovies */}
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

//class for what an indivdual search result would look like 
class SearchedMovie extends Component {
  render() {

    //method to determine if 5 movies are already nominated 
    let button;
    if (
      this.props.currentIdList.includes(this.props.searchedMovie.id) ||
      this.props.currentIdList.length >= 5
    ) {
      //diable all current nominations buttons in search bar 
      button = <DisabledButton />;
    } else {
      //regular search result button with less than 5 movies nominated 
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
        {/* individual search result for a movie  */}
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




//styling for what a disabled button would look like
function DisabledButton(props) {
  return (
    <button type="button" class="btn btn-secondary btn-sm m-2" disabled>
      Nominate
    </button>
  );
}
