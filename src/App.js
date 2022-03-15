import React, { Component } from "react";
import "./App.css";
import Page from "./components/Page";
import Nav from "./components/nav";
import { logDOM } from "@testing-library/react";

class App extends Component {
  state = {
    imageUrl: "https://picsum.photos/1000",
    imageUrl2: "https://picsum.photos/1000",
    imageUrl3: "https://picsum.photos/1000",
    imageUrl4: "https://picsum.photos/1000",
  };
  constructor(props) {
    super(props);
  }

  render() {
    let buttons = [];
    for (let i = 0; i < 4; i++) {
      let button = <button key={i.toString()}>{i}</button>;
      buttons.push(button);
    }
    return (
      <div className="App">
        <Nav buttons={buttons}>
          <Page>
            <div className="page" style={{ backgroundColor: "green" }}>
              <img src={this.state.imageUrl} alt="" />
            </div>
          </Page>
          <Page>
            <div className="page" style={{ backgroundColor: "red" }}>
              <img src={this.state.imageUrl2} alt="" />
              page 2
            </div>
          </Page>
          <Page>
            <div className="page" style={{ backgroundColor: "blue" }}>
              <img src={this.state.imageUrl3} alt="" />
              page 3
            </div>
          </Page>
          <Page>
            <div className="page" style={{ backgroundColor: "brown" }}>
              <img src={this.state.imageUrl4} alt="" />
              page 3
            </div>
          </Page>
        </Nav>
      </div>
    );
  }
}

export default App;
