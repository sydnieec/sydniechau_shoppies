import React, { Component } from "react";

//class to map Nominationed Movies 
class NominatedMoives extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "3%",
          marginLeft: "10%",
          marginRight: "10%",
          padding: "1%",
          backgroundColor: "#aeecae",
        }}
        className="Nominations"
      >
        <h1>Nominations</h1>
        {/* maps nominationsList indivdually to SearchedMovies */}
        {this.props.nominationsList.map((nominatedMovie) => (
          <NominatedMovie
            key={nominatedMovie.id}
            onDelete={this.props.onDelete}
            nominatedMovie={nominatedMovie}
          />
        ))}
      </div>
    );
  }
}

export default NominatedMoives;

//class for what an indivdual nomination would look like
class NominatedMovie extends Component {
  render() {
    return (
      <div class="d-flex justify-content-between">
        <div>
          <span style={{ fontsize: 30 }}>
            {this.props.nominatedMovie.name} - {this.props.nominatedMovie.year}
          </span>
        </div>
        <div>
          <button
            onClick={() => this.props.onDelete(this.props.nominatedMovie.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}
