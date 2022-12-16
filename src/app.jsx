import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelateAndOutfit from './components/relateAndOutfit/RelateAndOutfit.jsx';
import Reviews from './components/ratingsAndReviews/Reviews.jsx'
import Questions from './components/questionsAndAnswers/Questions.jsx'
import Overview from './components/overview/Overview.jsx'
import Banner from './components/Banner/Banner.jsx'
//updated file name to uppercase
const App = ({productx}) => {
  // const [ , ] = useState( );
  // console.log('this is productx in app', productx);
  const [product, setProduct] = useState(productx);
  // useEffect(() => {
  // console.log('product in app', product);

  // })

  return (
    <div id="appContainer" onClick={(e) => {
      e.preventDefault();
      // add an axios req and route to use the interactions API for any click
        // we need to have a uniform identifier for this to work.
      // console.log('global onClick triggered. here is e.target :', e)
    }}>
      <Banner />
      <Overview product={product}/>
      <RelateAndOutfit mainProduct={product} setProduct={setProduct}/>
      <Questions product={product}/>
      <Reviews product={product}/>
    </div>
  )
}

export default App;
