import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import axios from 'axios';

const QuestionItem = ({product, question, setQuestions}) => {
  // add in axios put requests on helpful and report
  // trigger a get request after each one is marked helpful or reported
  const markHelpful = (e) => {
    axios.put(`http://localhost:3001/qa/questions/${question.question_id}/helpful`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('error in questionItem', error);
      });
    setTimeout(() => setQuestions('init'), 200);
  };

  const report = (e) => {
    axios.put(`http://localhost:3001/qa/questions/${question.question_id}/report`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('error in questionItem', error);
      });
    setTimeout(() => setQuestions('init'), 200);
  };

  return (
    <div className='question'>
      <h5 className='question-body'>Q: {question.question_body}</h5>
      <p className='askedBy'>asked by {question.asker_name}</p>
      <p className='helpfulScore'>Helpful to {question.question_helpfulness} others</p>
      <button className='helpful' onClick={()=>markHelpful()}>Helpful?</button>
      <button className='report' onClick={()=>report()}>Report Question?</button>
      <AnswerList answers={question.answers} setQuestions={setQuestions} qId={question.question_id}/>
    </div>
  );
}

export default QuestionItem;