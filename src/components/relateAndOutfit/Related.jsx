import React, { useEffect, useState }from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';
const Related = ({mainProduct, pickProduct, choice, selectedProduct, setProduct}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    if(mainProduct.id !== undefined) {
    axios.get(`/products/${mainProduct.id}/related`)
    .then((relatedProducts) => {
      setRelatedProducts(relatedProducts.data);
    })
    } else {

    }
  }, [mainProduct])

  return(
    <div className="related-container" id="relatedContainer&noID">
      <h2 className="related-header" id="relatedHeader&noID">Related Products</h2>
      {/* Carousel takes main product */}
      <Carousel listOfProducts={relatedProducts} mainProduct={mainProduct} pickProduct={pickProduct} choice={choice} selectedProduct={selectedProduct} setProduct={setProduct}/>
    </div>
  )
}

export default Related;

