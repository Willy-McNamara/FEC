import React, { useState, useEffect } from 'react';
import relateAndCompare from './relateAndCompare/relateAndCompare.jsx';
const App = () => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <div>Overview</div>
      <relateAndCompare />
      <div>Questions and Answers</div>
      <div>Ratings and Reviews</div>
    </div>
  )
}

export default App;