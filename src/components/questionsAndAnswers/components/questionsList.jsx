import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem.jsx';

const QuestionsList = ({product, questions, setQuestions}) => {


  if (questions === 'init') {
    return (
      <div>
        <p>loading questions...</p>
      </div>
    );
  } else {
    return (
      <div>
        {questions.results.slice(0,4).map(q=><QuestionItem question={q} product={product} setQuestions={setQuestions}/>)}
      </div>
    )
  }



}

export default QuestionsList;