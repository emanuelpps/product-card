import React from 'react';
import './CardContainer.css';
import TitleContainer from '../TitleContainer/TitleContainer';
import ProductContainer from '../ProductContainer/ProductContainer';
import PriceButtonContainer from '../PriceButtonContainer/PriceButtonContainer';

export default function CardContainer() {
  return (
    <div className='card-container'>
        <TitleContainer/>
        <ProductContainer/>
        <PriceButtonContainer/>
    </div>
  )
}
