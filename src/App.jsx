import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelateAndOutfit from './components/relateAndOutfit/RelateAndOutfit.jsx';
import Reviews from './components/ratingsAndReviews/reviews.jsx'
import Questions from './components/questionsAndAnswers/Questions.jsx'
import Overview from './components/overview/overview.jsx'

const App = ({product}) => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // })

  return (
    <div>
      <Overview product={product}/>
      <RelateAndOutfit mainProduct={product}/>
      <Questions product={product}/>
      <Reviews product={product}/>
    </div>
  )
}

export default App;
