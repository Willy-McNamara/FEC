import React from 'react';

const Modal = ({modalState, toggleModal}) => {
  return(
    <div className="container" style={{
      visibility: modalState ? 'visible' : '',
      opacity: modalState ? 1 : '',
      }}>
      <div className="modal">
        <h2>Modal Content</h2>
        <div className="close-button" onClick={toggleModal}>Close</div>
      </div>
    </div>
  )
}

export default Modal;