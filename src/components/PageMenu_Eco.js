import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "./PageMenu.css";
import Card from "./CardTemplate";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardMain from "./cardMain";

class PageMenuEco extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: "#20c997" }}>
        <Container>
          <Row>`</Row>
          <CardMain></CardMain>
          <Row>
            <Col>
              <Card></Card>
            </Col>
            <Col>
              <Card></Card>
            </Col>
            <Col>
              <Card></Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PageMenuEco;
