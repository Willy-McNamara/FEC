import React, { useEffect, useState }from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';
const Related = ({mainProduct, pickProduct, choice, selectedProduct}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    if(selectedProduct.id !== undefined) {
    axios.get(`/products/${selectedProduct.id}/related`)
    .then((relatedProducts) => {
      setRelatedProducts(relatedProducts.data);
    })
    } else {

    }
  }, [selectedProduct])
  console.log('pick product in related', pickProduct);

  return(
    <div className="related-container" id="relatedContainer&noID">
      <h2 className="related-header" id="relatedHeader&noID">Related Products</h2>
      {/* Carousel takes main product */}
      <Carousel listOfProducts={relatedProducts} mainProduct={mainProduct} pickProduct={pickProduct} choice={choice} selectedProduct={selectedProduct}/>
    </div>
  )
  console.log(relatedProducts);
}

export default Related;

