import React, { useState, useEffect } from 'react';
import QuestionsList from './components/QuestionsList.jsx';
import QuestionItem from './components/QuestionItem.jsx';
import AnswerList from './components/AnswerList.jsx';
import QuestionForm from './components/QuestionForm.jsx';
import axios from 'axios';
//adding comment just for fun

const Questions = ({product}) => {
  const [questions, setQuestions] = useState('init');
  const [openModal, setOpenModal] = useState(false);
  const product_id = product.id;




  useEffect(() => {
    if (questions === 'init') {
    axios.get(`http://localhost:3001/qa/questions/${product.id}`)
      .then((res)=>{
        setQuestions(res.data);
      })
      .catch((err)=>{console.log('questions get error:', err)})
    }
  }, [questions]);

  return (
    <div className='questions-and-answers'>
      <h3 className='qna-heading'>Questions & Answers</h3>
      <input type="text" placeholder="Search Questions" />
      <QuestionsList product={product} questions={questions} setQuestions={setQuestions}/>
      <button onClick={()=>setOpenModal(true)}>Add Question</button>
      {openModal && <QuestionForm closeModal={setOpenModal} id={product_id} setQuestions={setQuestions}/>}
    </div>
  )
}

export default Questions;
