import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

//class to map the claims
class NominatedMoives extends Component {
  render() {
    return (
      <div>
        <h1>Nominations</h1>
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

//class for what an indivdual claim would look like
class NominatedMovie extends Component {
  render() {
    return (
      <div class="d-flex justify-content-between">
        <div>
          <span style={{ fontsize: 30 }}>
            {this.props.nominatedMovie.name} , {this.props.nominatedMovie.year},{" "}
            {this.props.nominatedMovie.id}
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
