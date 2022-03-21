import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card ">
        <div className="card-body">
          <h5 style={{ fontSize: 100 }} className="card-title">
            Card title
          </h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Button
          </a>
        </div>
      </div>
    );
  }
}
export default Card;
