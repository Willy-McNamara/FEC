import React, { useState, useEffect } from 'react';
import RelateAndCompare from './components/relateAndCompare/RelateAndCompare.jsx';
import Reviews from './components/ratingsAndReviews/reviews.jsx'
import Questions from './components/questionsAndAnswers/Questions.jsx'
import Overview from './components/overview/overview.jsx'

const App = ({product}) => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      < Overview product={product}/>
      <RelateAndCompare product={product}/>
      <Questions product={product}/>
      <Reviews product={product}/>
    </div>
  )
}

export default App;
