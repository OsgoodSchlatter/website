import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let left = props.children.map((o) => this.width);
    if (left.length > 0) {
      left[0] = 0;
    }
    this.state = { page: 0, left: left };
  }

  move(page) {
    const left = this.state.left.slice();
    if (page >= left.length) {
      page = 0;
    }
    for (let i = 0; i < left.length; i++) {
      if (i < page) {
        left[i] = -this.width;
      } else if (i === page) {
        left[i] = 0;
      } else {
        left[i] = this.width;
      }
    }
    this.setState({ left: left, page: page });
  }

  render() {
    const pageElements = React.Children.map(this.props.children, (page, idx) =>
      React.cloneElement(page, { left: this.state.left[idx] })
    );

    const buttonElements = React.Children.map(
      this.props.buttons,
      (button, idx) => {
        let newButton = React.cloneElement(button, {
          onClick: () => this.move(idx),
          ...button.props,
        });

        return newButton;
      }
    );

    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <form class=" justify-content-start">
            <button class="btn btn-outline-success me-2" type="button">
              Main button
            </button>
            <button class="btn btn-sm btn-outline-secondary" type="button">
              Smaller button
            </button>
            {buttonElements}
          </form>
        </nav>

        <div>{pageElements}</div>
      </div>
    );
  }
}

export default Nav;
