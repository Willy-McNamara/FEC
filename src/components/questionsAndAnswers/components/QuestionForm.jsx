import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionForm = ({id, closeModal, setQuestions, handleClose}) => {
  const [newBody, setNewBody] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  //axios post request each time submit is hit and then re-render questions

  //axios.post
  const handleSubmit = (e) => {
    axios.post('/qa/questions', {
      body: `${newBody}`,
      name: `${newName}`,
      email: `${newEmail}`,
      product_id: id
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('error in questionform', error);
      });
    // console.log('name', newName);
    // console.log('email', newEmail);
    // console.log('body', newBody);
    // console.log('id', id);
    setTimeout(() => setQuestions('init'), 200);
  };

  const handleBody = (e) => {
    setNewBody(e);
  };
  const handleName = (e) => {
    setNewName(e);
  };
  const handleEmail = (e) => {
    setNewEmail(e);
  };

  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <input type="text" placeholder="Your Name" setText='""' onChange={e=>handleName(e.target.value)}/>
        <input type="text" placeholder="Your Email" setText='""' onChange={e=>handleEmail(e.target.value)}/>
        <input type="text" placeholder="Your Question" setText='""' onChange={e=>handleBody(e.target.value)}/>
        <button onClick={(e)=> {
          handleSubmit(e);
          handleClose(false);
          }}>Submit</button>
      </div>
    </div>
  );


}




export default QuestionForm;