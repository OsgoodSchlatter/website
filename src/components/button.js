import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render(){

    return(
        <button class="btn btn-outline-success me-2" type="button" key={0}>
        {"Main"}
      </button>,

    );
  }


}
