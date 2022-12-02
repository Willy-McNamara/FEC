import React, { useState, useEffect } from 'react';
import Reviews from './components/ratingsAndReviews/reviews.jsx'
import Questions from './components/questionsAndAnswers/Questions.jsx'

const App = () => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <div>Overview</div>
      <div>Related Items</div>
      <Questions />
      <Reviews />
    </div>
  )
}

export default App;