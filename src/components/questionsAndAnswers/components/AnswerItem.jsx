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
    <div>
      <p>A: {answer.body}</p>
      <p>by: {answer.answerer_name}</p>
      {answer.photos.map(image=> <img src={image.url} style={{height: '50px', width: '50px'}}/>)}
      <button className='helpful' onClick={()=>markHelpfulAns()}>helpful?</button>
      <button className='report' onClick={()=>reportAns()}>Report Answer?</button>
      <p className='helpfulScore'>Helpful to {answer.helpfulness} others</p>
    </div>
  );
}

export default AnswerItem;