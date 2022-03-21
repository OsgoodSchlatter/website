import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "./PageMenu.css";
import Card from "./card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class PageMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <Container>
          <Row> `</Row>
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

export default PageMenu;
