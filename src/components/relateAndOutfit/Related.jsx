import React, { useEffect, useState }from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';
const Related = ({mainProduct}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    axios.get(`/products/${mainProduct.id}/related`)
    .then((relatedProducts) => {
      setRelatedProducts(relatedProducts.data);
    })
  }, [mainProduct])
  return(
    <div className="related-container" id="relatedContainer&noID">
      <h2 className="related-header" id="relatedHeader&noID">Related Products</h2>
      {/* Carousel takes main product */}
      <Carousel listOfProducts={relatedProducts}/>
    </div>
  )
  console.log(relatedProducts);
}

export default Related;