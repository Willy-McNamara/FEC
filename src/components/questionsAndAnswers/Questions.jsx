import React, { useState, useEffect } from 'react';
import QuestionsList from './components/QuestionsList.jsx';
import QuestionItem from './components/QuestionItem.jsx';
import AnswerList from './components/AnswerList.jsx';
import axios from 'axios';
//adding comment just for fun

const Questions = ({product}) => {
  const [questions, setQuestions] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/qa/questions/${product.id}`)
      .then((res)=>{
        setQuestions(res.data);
        console.log('res.data:', res.data);
      })
      .catch((err)=>{console.log('questions get error:', err)})
  }, []);

  return (
    <div className='questions-and-answers'>
      <h3>Questions & Answers</h3>
      <input type="text" placeholder="Search Questions" />
      <QuestionsList produt={product}/>
      <button>Add Question</button>
    </div>
  )
}

export default Questions;
