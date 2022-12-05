import React, { useState, useEffect } from 'react';
import QuestionsList from './components/QuestionsList.jsx';
import QuestionItem from './components/QuestionItem.jsx';
import AnswerList from './components/AnswerList.jsx';
//adding comment just for fun

const Questions = ({product}) => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div className='questions-and-answers'>
      <h3>Questions & Answers</h3>
      <input type="text" placeholder="Search Questions" />
      <QuestionsList product={product}/>
      <button>Add Question</button>
    </div>
  )
}

export default Questions;
