import React, {useState, useEffect} from 'react';
import AnswerItem from './AnswerItem.jsx';
import AnswerForm from './AnswerForm.jsx';
import axios from 'axios';


const AnswerList = ({product, setQuestions, qId}) => {
  const [openAnswerModal, setAnswerModal] = useState(false);
  const [answers, setAnswers] = useState('init');

  useEffect(() => {
    if (answers === 'init') {
    axios.get(`http://localhost:3001/qa/questions/${qId}/answers`)
      .then((res)=>{
        setAnswers(res.data);
      })
      .catch((err)=>{console.log('answers get error:', err)})
    }
  }, [answers]);

  // axios post request within the Answerform modal

  // let answerList = [];
  // for (let id in answers) {
  //   answerList.push(answers[id])
  // }

  if (answers === 'init') {
    return (
      <p>loading answers...</p>
    );
  } else {
    return (
      <div>
        {answers.results.slice(0,2).map(answer=><AnswerItem product={product} answer={answer} setAnswers={setAnswers} setQuestions={setQuestions}/>)}
        <button onClick={()=>setAnswerModal(true)}>Add Answer</button>
        {openAnswerModal && <AnswerForm closeModal={setAnswerModal} id={qId} setAnswers={setAnswers} setQuestions={setQuestions}/>}
      </div>
    );
  }
}


export default AnswerList;

