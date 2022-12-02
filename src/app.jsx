import React, { useState, useEffect } from 'react';
import RelateAndCompare from './RelateAndCompare/relateAndCompare.jsx';
import Reviews from './components/ratingsAndReviews/reviews.jsx'
import Overview from './components/overview/overview.jsx'

const App = () => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      < Overview />
      <div>Related Items</div>
      <div>Overview</div>
      <RelateAndCompare />
      <div>Questions and Answers</div>
      <Reviews />
    </div>
  )
}

export default App;