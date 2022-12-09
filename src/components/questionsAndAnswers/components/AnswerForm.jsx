import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnswerForm = ({id, handleClose, setQuestions, setAnswers}) => {
  const [newBody, setNewBody] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhotos, setNewPhotos] = useState('');

  //GO in and put the setQuestions within the .then statement so it re-renders as soon as request is handled
  //axios.post
  const handleSubmit = (e) => {
    axios.post(`http://localhost:3001/qa/questions/${id}/answers`, {
      body: `${newBody}`,
      name: `${newName}`,
      email: `${newEmail}`,
      photos: [`${newPhotos}`]
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
    // console.log('photos', [`${newPhotos}`]);
    setTimeout(()=> setAnswers('init'), 200)
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
  const handlePhotos = (e) => {
    setNewPhotos(e);
  };

  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <input type="text" placeholder="Your Name" onChange={e=>handleName(e.target.value)}/>
        <input type="text" placeholder="Your Email" onChange={e=>handleEmail(e.target.value)}/>
        <input type="text" placeholder="Your Answer" onChange={e=>handleBody(e.target.value)}/>
        <input type="text" placeholder="URL to your photos" onChange={e=>handlePhotos(e.target.value)}/>
        <button onClick={(e)=> {
          handleSubmit(e)
          handleClose(false);
          }}>Submit</button>
      </div>
    </div>
  );


}
export default AnswerForm;