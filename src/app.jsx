import React, { useState, useEffect } from 'react';
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
      <div>Questions and Answers</div>
      <Reviews />
    </div>
  )
}

export default App;