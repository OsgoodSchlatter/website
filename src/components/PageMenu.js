import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "./PageMenu.css";

class PageMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div style={{ marginTop: "50px" }} className="card w-75">
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
        </div>
      </Fragment>
    );
  }
}

export default PageMenu;
