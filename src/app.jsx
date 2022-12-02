import React, { useState, useEffect } from 'react';
import Reviews from './components/ratingsAndReviews/reviews.jsx'

const App = () => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <div>Overview</div>
      <div>Related Items</div>
      <div>Questions and Answers</div>
      <Reviews />
    </div>
  )
}

export default App;