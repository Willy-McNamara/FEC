import React from 'react';
import axios from 'axios';

const AnswerItem = ({setQuestions, setAnswers, product, answer}) => {

  const markHelpfulAns = (e) => {
    axios.put(`http://localhost:3001/qa/answers/${answer.answer_id}/helpful`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('error in questionItem', error);
      });
    setTimeout(() => setAnswers('init'), 200);
  };

  const reportAns = (e) => {
    axios.put(`http://localhost:3001/qa/answers/${answer.answer_id}/report`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('error in questionItem', error);
      });
    setTimeout(() => setAnswers('init'), 200);
  };
  // add in axios put requests on helpful and report
  // trigger a get request after each one is marked helpful or reported
  return (
    <div className='answer-item'>
      <div className='helpful-box'>
        <h5 className='answer'>A: {answer.body}</h5>
        {answer.photos.map(image=> <img src={image.url} style={{height: '50px', width: '50px'}}/>)}
        <p className='askedBy'>by {answer.answerer_name}, {answer.date.substring(0, 10)}</p>
        <p className='helpfulAns' onClick={()=>markHelpfulAns()}>Helpful? Yes ({answer.helpfulness})</p>
        <p className='reportAns' onClick={()=>reportAns()}>Report Answer?</p>
      </div>
    </div>
  );
}

export default AnswerItem;