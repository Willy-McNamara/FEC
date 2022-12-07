import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';

const QuestionItem = ({product, question}) => {
  console.log('success, made it to questionItem', question);
  return (
    <div className='question'>
      <h5 className='question-body'>{question.question_body}</h5>
      <p className='askedBy'>asked by {question.asker_name}</p>
      <p className='helpfulScore'>Helpful {question.question_helpfulness}</p>
      <AnswerList answers={question.answers}/>
    </div>
  );
}

export default QuestionItem;