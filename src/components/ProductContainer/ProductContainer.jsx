import React from "react";
import "./ProductContainer.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function ProductContainer({loadProduct}) {
  return (
    <div className="product-container">
      <div className="product">
        <img
          src={loadProduct.image}
          alt=""
        ></img>
        <p className="product-text">
        {loadProduct.description}
        </p>
      </div>
      <div className="counter">
        <button className="button-reset"><AiOutlineMinus/></button>
        <input type="number" />
        <button className="button-reset"><AiOutlinePlus/></button>
      </div>
      <hr className="line-bar"></hr>
    </div>
  );
}
