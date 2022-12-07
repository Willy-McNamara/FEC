import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem.jsx';

const QuestionsList = ({product, questions}) => {


  if (questions === 'init') {
    return (
      <div>
        <p>loading questions...</p>
      </div>
    );
  } else {
    return (
      <div>
        {questions.results.map(q=><QuestionItem question={q} product={product}/>)}
      </div>
    )
  }



}

export default QuestionsList;