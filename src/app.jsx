import React, { useState, useEffect } from 'react';
import RelateAndCompare from './RelateAndCompare/relateAndCompare.jsx';
import Reviews from './components/ratingsAndReviews/reviews.jsx'

const App = () => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <div>Overview</div>
      <RelateAndCompare />
      <div>Questions and Answers</div>
      <Reviews />
    </div>
  )
}

export default App;