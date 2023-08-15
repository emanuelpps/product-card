import React from "react";
import "./PriceButtonContainer.css";

export default function PriceButtonContainer() {
  return (
    <div className="price-button-container">
      <div className="price-container">
        <div className="shipping">
        <h4>Envio</h4> <span>$100</span>
        </div>
        <div className="precio-unitario">
        <h3>Precio Unitario</h3> <span>$700</span>
        </div>
        <div className="precio-total">
        <h3>Precio Total</h3> <span>$800</span>
        </div>
      </div>
      <div className="button-container">
        <div className="button-div">
        <button className="button-reset">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
