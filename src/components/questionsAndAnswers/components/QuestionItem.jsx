import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import axios from 'axios';

const QuestionItem = ({product, question, setQuestions}) => {
  // add in axios put requests on helpful and report
  // trigger a get request after each one is marked helpful or reported
  const markHelpful = (e) => {
    axios.put(`/qa/questions/${question.question_id}/helpful`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('error in questionItem', error);
      });
    setTimeout(() => setQuestions('init'), 200);
  };

  const report = (e) => {
    axios.put(`/qa/questions/${question.question_id}/report`)
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
      <div className='helpful-box'>
        <h5 className='question-body'>Q: {question.question_body}</h5>
        <p className='askedBy'>by {question.asker_name}, {question.question_date.substring(0, 10)}</p>
        <p className='helpful' onClick={()=>markHelpful()}>Helpful? Yes ({question.question_helpfulness})</p>
        <p className='report' onClick={()=>report()}>Report Question?</p>
      </div>
      <AnswerList answers={question.answers} setQuestions={setQuestions} qId={question.question_id}/>
    </div>
  );
}

export default QuestionItem;