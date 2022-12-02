import React, { useState, useEffect } from 'react';
import RelateAndCompare from './RelateAndCompare/relateAndCompare.jsx';
import Reviews from './components/ratingsAndReviews/reviews.jsx'
import Questions from './components/questionsAndAnswers/Questions.jsx'
import Overview from './components/overview/overview.jsx'

const App = () => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      < Overview />
      <div>Related Items</div>
      <Questions />
      <Reviews />
    </div>
  )
}

export default App;