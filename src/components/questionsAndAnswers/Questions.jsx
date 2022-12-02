import React, { useState, useEffect } from 'react';
import QuestionsList from './components/QuestionsList.jsx';
//adding comment just for fun

const Questions = ({product}) => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <h3>Questions & Answers</h3>
      <QuestionsList />
    </div>
  )
}

export default Questions;
