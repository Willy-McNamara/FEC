import React from 'react';
import axios from 'axios';

const AnswerItem = ({setQuestions, product, answer}) => {

  const markHelpful = (e) => {
    axios.put(`http://localhost:3001/qa/answers/${answer.id}/helpful`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('error in questionItem', error);
      });
    setTimeout(() => setQuestions('init'), 200);
  };

  const report = (e) => {
    axios.put(`http://localhost:3001/qa/answers/${answer.id}/report`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('error in questionItem', error);
      });
    setTimeout(() => setQuestions('init'), 200);
  };
  // add in axios put requests on helpful and report
  // trigger a get request after each one is marked helpful or reported
  return (
    <div>
      <p>A: {answer.body}</p>
      <p>by: {answer.answerer_name}</p>
      <button className='helpful' onClick={()=>markHelpful()}>helpful?</button>
      <button className='report' onClick={()=>report()}>Report Answer?</button>
      <p className='helpfulScore'>Helpful to {answer.helpfulness} others</p>
    </div>
  );
}

export default AnswerItem;