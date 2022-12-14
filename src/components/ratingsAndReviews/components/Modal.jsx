import React, { useState, useEffect } from 'react';
import styled from 'styled-components'


const Modal = ({showModal, setShowModal, children}) => {

    function closeModal(e) {
      // console.log(e.target.classList);
      if(e.target.classList.contains('grey-screen')) {
        setShowModal(false);
      }
    }

  return (
    <div className="modal">
      {showModal &&
          <div className="grey-screen" onClick={closeModal}>
            <div className="inner-content">
              {children}
            </div>
          </div>
      }
    </div>

  )
}

export default Modal;
