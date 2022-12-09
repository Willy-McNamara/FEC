import React from 'react';
import List from './List.jsx';
import axios from 'axios';
import ReactCardSlider from'./ReactCardSlider.jsx';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
const Relate = ({product, choice}) => {
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
      <div className="Relate-Container">
        <h2>Related Products</h2>
        <section className="ReactCardSlider-body">
          <ReactCardSlider relatedProducts={relatedProducts} icon={faCodeCompare} choice={choice}/>
        </section>
      </div>
  )
}

export default Relate;