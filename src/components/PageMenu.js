import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "./PageMenu.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardMain from "./cardMain";
import CardCV from "./CardCV";
import Card from "./CardTemplate";

class PageMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <Container>
          <Row>`</Row>
          <CardMain></CardMain>
          <Row>
            <Col>
              <CardCV></CardCV>
            </Col>
            <Col>
              <Card
                link={"https://github.com/OsgoodSchlatter"}
                image={"https://picsum.photos/200"}
              ></Card>
            </Col>
            <Col>
              <Card
                link={"https://osgoodschlatter.github.io/hackathon/"}
                image={require("../kryptosphere.png")}
                text1={"Redaction d'un guide pour hackathon"}
                text2={"Kryptosphère"}
                text3={"Cliquez ici pour le lire !"}
              ></Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PageMenu;
