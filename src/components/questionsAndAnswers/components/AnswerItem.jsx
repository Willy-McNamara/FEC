import React from 'react';

const AnswerItem = ({product, answer}) => {

  return (
    <div>
      <p>A: {answer.body}</p>
      <p>by: {answer.answerer_name}</p>
    </div>
  );
}

export default AnswerItem;