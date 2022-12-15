// import React, { useEffect, useState }from 'react';
// import Carousel from './Carousel.jsx';
// import axios from 'axios';
// const Related = ({mainProduct, pickProduct, choice, selectedProduct, setProduct}) => {

//   const [relatedProducts, setRelatedProducts] = useState([]);
//   useEffect(() => {
//     if(mainProduct.id !== undefined) {
//     axios.get(`/products/${mainProduct.id}/related`)
//     .then((relatedProducts) => {
//       setRelatedProducts(relatedProducts.data);
//     })
//     } else {

//     }
//   }, [mainProduct])

//   return(
//     <div className="related-container" id="relatedContainer&noID">
//       <h2 className="related-header" id="relatedHeader&noID">Related Products</h2>
//       {/* Carousel takes main product */}
//       <Carousel listOfProducts={relatedProducts} mainProduct={mainProduct} pickProduct={pickProduct} choice={choice} selectedProduct={selectedProduct} setProduct={setProduct}/>
//     </div>
//   )
// }

// export default Related;


import React, { useEffect, useState }from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';
const Related = ({mainProduct, pickProduct, choice, selectedProduct, setProduct}) => {
const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    if(mainProduct.id !== undefined) {
    axios.get(`/products/${mainProduct.id}/related`)
    .then((relatedProducts) => {
      let items = relatedProducts.data;
      let count = {}
      for(let i = 0; i < items.length; i++) {
        if(items[i].id in count === false) {
          count[items[i].id] = 1;
        } else {
          count[items[i].id]++;
        }
        if(items[i].id === mainProduct.id) {
          items.splice(i,1);
        }
      }
      for(let key in count) {
        if(count[key] > 1) {
          for(let n = 0; n < items.length; n++) {
            if(items[n].id === Number(key)) {
              items.splice(n,1);
            }
          }
        }
      }
      setRelatedProducts(items);
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