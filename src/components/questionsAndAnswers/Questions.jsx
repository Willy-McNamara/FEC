import React, { useState, useEffect } from 'react';
import QuestionsList from './components/questionsList.jsx';
import QuestionItem from './components/QuestionItem.jsx';
import AnswerList from './components/AnswerList.jsx';
import QuestionForm from './components/QuestionForm.jsx';
import axios from 'axios';
import {StyledModal} from '../modal.jsx';
//adding comment just for fun

const Questions = ({product}) => {
  const [initQuestions, setInitQuestions] = useState('init');
  const [questions, setQuestions] = useState('init');
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [shownQuestions, setShownQuestions] = useState(2);
  const [inSearch, setInSearch] = useState(false);
  const [searchQs, setSearchQs] = useState('init');
  const product_id = product.id;






  useEffect(() => {
    if (questions === 'init') {
    axios.get(`/qa/questions/${product.id}`)
      .then((res)=>{
        setInitQuestions(res.data.results);
        setQuestions(res.data.results)
      })
      .catch((err)=>{console.log('questions get error:', err)})
    }
  }, [questions]);

  const searchQuestions = (input) => {
    if (input.length > 2) {
      // console.log('working as expected, input:', input);
      // console.log(questions)
      let filteredQuestions = initQuestions.filter(question=>question.question_body.indexOf(input) !== -1);
      // console.log('filtered Questions', filteredQuestions);
      // setQuestions(filteredQuestions);
      setSearchQs(filteredQuestions);
      setInSearch(true);
      // console.log(inSearch);
      // console.log(searchQs);
    } else {
      setInSearch(false);
    }
  }

  const handleChange = (val) => {
    searchQuestions(val);
  }

  return (
    <div className='questions-and-answers'>
      <h3 className='qna-heading'>Questions & Answers</h3>
      <input onChange={(e)=>handleChange(e.target.value)} type="text" className='qna-search' placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <div className='qna-scroll'>
        {!inSearch && <QuestionsList product={product} shownQ={shownQuestions} showMore={setShownQuestions} questions={questions} setQuestions={setQuestions}/>}
        {inSearch && <QuestionsList product={product} shownQ={shownQuestions} showMore={setShownQuestions} questions={searchQs} setQuestions={setQuestions}/>}
        </div>

      <p className='qna-button' onClick={() => setOpen(!open)}>Add Question +</p>
      <StyledModal
        show={open}
        handleClose={() => setOpen(false)}
      >
        <QuestionForm handleClose={setOpen} id={product_id} setQuestions={setQuestions}/>

      </StyledModal>






    </div>
  )
}

export default Questions;

// <button onClick={()=>setOpenModal(true)}>Add Question</button>
//       {openModal && <QuestionForm closeModal={setOpenModal} id={product_id} setQuestions={setQuestions}/>}
