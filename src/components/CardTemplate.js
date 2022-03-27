import React, { Component } from "react";

const Card = ({ text1, text2, text3, image, link, type }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{text1}</h5>
        <p className="card-text">{text2}</p>
        <a href={link} class="btn btn-primary">
          {text3}
        </a>
      </div>
    </div>
  );
};

export default Card;
