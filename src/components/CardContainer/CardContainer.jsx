import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import TitleContainer from "../TitleContainer/TitleContainer";
import ProductContainer from "../ProductContainer/ProductContainer";
import PriceButtonContainer from "../PriceButtonContainer/PriceButtonContainer";

export default function CardContainer() {
  const [loadProduct, setLoadProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const randomProduct = () => {
    return Math.floor(Math.random() * 21)
  }

  useEffect(() => {
    const newProduct = [];
    fetch(`https://fakestoreapi.com/products/${randomProduct()}`)
      .then((res) => res.json())
      .then((res) => newProduct.push(...res,quantity));
      setLoadProduct(newProduct)
      console.log(loadProduct);
  }, []);

  return (
    <div className="card-container">
      <TitleContainer loadProduct={loadProduct}/>
      <ProductContainer loadProduct={loadProduct}/>
      <PriceButtonContainer loadProduct={loadProduct}/>
    </div>
  );
}
