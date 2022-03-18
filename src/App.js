import React, { Component } from "react";
import "./App.css";
import Page from "./components/Page";
import Nav from "./components/nav";
import "bootstrap/dist/css/bootstrap.css";
import PageMenu from "./components/PageMenu";

class App extends Component {
  state = {
    imageUrl: "https://picsum.photos/200",
    imageUrl2: "https://picsum.photos/2000",
    imageUrl3: "https://picsum.photos/2000",
    imageUrl4: "https://picsum.photos/2000",
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
            <PageMenu></PageMenu>
          </Page>
          <Page>
            <PageMenu></PageMenu>
          </Page>
          <Page>
            <PageMenu></PageMenu>
          </Page>

          <Page>
            <PageMenu></PageMenu>
          </Page>
        </Nav>
      </div>
    );
  }
}

export default App;
