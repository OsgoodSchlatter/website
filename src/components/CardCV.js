import React, { Component } from "react";

import { Document, Page, pdfjs, View, TextItem, StyleSheet } from "react-pdf";

import cv from "../cv.png";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const styles = StyleSheet.create({
//   page: { backgroundColor: "tomato" },
//   section: { color: "white", textAlign: "center", margin: 30 },
// });

class CardCV extends Component {
  render() {
    return (
      <div class="card" style={{ width: "18rem" }}>
        <img src={require("../cv.png")} className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">Mon cv</h5>
          <p className="card-text"></p>
          <a
            href="https://osgoodschlatter.github.io/cv/CV_EN.pdf"
            className="btn btn-primary"
          >
            Cliquez ici pour le visualiser !
          </a>
        </div>
      </div>
    );
  }
}
export default CardCV;
