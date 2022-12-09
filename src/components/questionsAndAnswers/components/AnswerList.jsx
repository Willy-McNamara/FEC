import React, {useState} from 'react';
import AnswerItem from './AnswerItem.jsx';
import AnswerForm from './AnswerForm.jsx';


const AnswerList = ({product, answers, setQuestions, qId}) => {
  const [openAnswerModal, setAnswerModal] = useState(false);

  // axios post request within the Answerform modal

  let answerList = [];
  for (let id in answers) {
    answerList.push(answers[id])
  }
  return (
    <div>
      {answerList.slice(0,2).map(answer=><AnswerItem product={product} answer={answer} setQuestions={setQuestions}/>)}
      <button onClick={()=>setAnswerModal(true)}>Add Answer</button>
      {openAnswerModal && <AnswerForm closeModal={setAnswerModal} id={qId} setQuestions={setQuestions}/>}
    </div>
  );
}


export default AnswerList;