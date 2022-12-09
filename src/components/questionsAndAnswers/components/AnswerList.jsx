import React from 'react';
import AnswerItem from './AnswerItem.jsx';


const AnswerList = ({product, answers}) => {
  let answerList = [];
  for (let id in answers) {
    if (answerList.length < 2) {
      answerList.push(answers[id])
    }
  }
  return (
    <div>
      {answerList.map(answer=><AnswerItem product={product} answer={answer}/>)}
      <button>add answer</button>
    </div>
  );
}


export default AnswerList;