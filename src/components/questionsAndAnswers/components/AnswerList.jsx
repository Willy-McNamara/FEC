import React, {useState, useEffect} from 'react';
import AnswerItem from './AnswerItem.jsx';
import AnswerForm from './AnswerForm.jsx';
import axios from 'axios';
import {StyledModal} from '../../modal.jsx';



const AnswerList = ({product, setQuestions, qId}) => {
  const [openAnswerModal, setAnswerModal] = useState(false);
  const [answers, setAnswers] = useState('init');
  const [open, setOpen] = useState(false);
  const [shownA, setShownA] = useState(2);

  useEffect(() => {
    if (answers === 'init') {
    axios.get(`/qa/questions/${qId}/answers`)
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

    const moreA = () => {
      setShownA(shownA + 2);
      setAnswers('init');
    }

    return (
      <div>
        <p className='helpfulAns' onClick={() => setOpen(!open)}>Add Answer</p>
        <StyledModal
          show={open}
          handleClose={() => setOpen(false)}
        >
          <AnswerForm handleClose={setOpen} id={qId} setAnswers={setAnswers} setQuestions={setQuestions}/>

        </StyledModal>
        {answers.results.slice(0, shownA).map(answer=><AnswerItem product={product} answer={answer} setAnswers={setAnswers} setQuestions={setQuestions}/>)}
        {answers.results.length > shownA && <p className='show-ans' onClick={() => moreA()}>Load More Answers</p>}
      </div>
    );
  }
}


export default AnswerList;

