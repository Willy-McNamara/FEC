import React, { useEffect } from 'react';
import axios from 'axios';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';
import { useState } from 'react';
const RelateAndOutfit = ({mainProduct}) => {
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    axios.get(`/products/${mainProduct.id}`)
    .then((data) => {
      setSelectedProduct(data.data);
    })
  }, [mainProduct]);
  const pickProduct = (product) => {
    setSelectedProduct(product);
    console.log('This is the selectedProduct ', product)
  }
  console.log('pick product in relate and outfit', pickProduct);
  return(
    <div className="relate-and-outfit-carousel-container" id="relate-and-outfit-carousel-container">
      <Related mainProduct={mainProduct} pickProduct={pickProduct} choice={'relate'} selectedProduct={selectedProduct}/>
      <Outfit mainProduct={mainProduct} choice={'outfit'} selectedProduct={selectedProduct} pickProduct={pickProduct}/>
    </div>
  )
}

export default RelateAndOutfit