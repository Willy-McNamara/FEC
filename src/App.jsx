import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelateAndOutfit from './components/relateAndOutfit/RelateAndOutfit.jsx';
import Reviews from './components/ratingsAndReviews/reviews.jsx'
import Questions from './components/questionsAndAnswers/Questions.jsx'
import Overview from './components/overview/overview.jsx'

const App = ({productx}) => {
  // const [ , ] = useState( );
  console.log('this is productx in app', productx);
  const [product, setProduct] = useState(productx);
  // useEffect(() => {
  console.log('product in app', product);

  // })

  return (
    <div>
      <Overview product={product}/>
      <RelateAndOutfit mainProduct={product} setProduct={setProduct}/>
      <Questions product={product}/>
      <Reviews product={product}/>
    </div>
  )
}

export default App;
