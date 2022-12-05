import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';

const QuestionItem = ({product}) => {
  return (
    <div>
      <p>Question item</p>
      <AnswerList product={product}/>
    </div>
  );
}

export default QuestionItem;