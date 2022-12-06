import React from 'react';
import List from './List.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Relate = ({product}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const changeRelatedProducts = (arrayOfRelatedProducts) => {
    setRelatedProducts(arrayOfRelatedProducts);
  }

  useEffect(() => {
    if(relatedProducts.length === 0) {
      axios.get(`http://localhost:3001/products/${product.id}/related`)
      .then((data) => {
        changeRelatedProducts(data.data)
      });
    }
  }, [product]);


  return(
    <section>
      <div>Related Products</div>
      <List relatedProducts={relatedProducts}/>
    </section>
  )
}

export default Relate;