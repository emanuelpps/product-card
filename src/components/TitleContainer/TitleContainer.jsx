import React from "react";
import "./TitleContainer.css";

export default function TitleContainer({loadProduct}) {
  return (
    <div className="title-container">
      <div className="title-product">
        <h2>{loadProduct.title}</h2>
        <h5>ID: {loadProduct.id}</h5>
      </div>
    </div>
  );
}
