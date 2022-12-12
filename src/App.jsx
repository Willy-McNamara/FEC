import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelateAndCompare from './components/relateAndCompare/RelateAndCompare.jsx';
import Reviews from './components/ratingsAndReviews/reviews.jsx'
import Questions from './components/questionsAndAnswers/Questions.jsx'
import Overview from './components/overview/overview.jsx'
import Banner from './components/Banner/Banner.jsx'

const App = ({product}) => {
  // const [ , ] = useState( );

  // useEffect(() => {

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
      <RelateAndCompare product={product}/>
      <Questions product={product}/>
      <Reviews product={product}/>
    </div>
  )
}

export default App;
