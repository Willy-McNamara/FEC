import React, { useState, useEffect } from 'react';
import styled from 'styled-components'


const MoreReviews= ({showMoreReviews, setshowMoreReviews, children}) => {
//past into parent

//paste this function into an onClick on whichever parent element needs to open the modal




  //parent container
  const modalPosition = {
    position:'fixed',
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#F1F1F1',
    zIndex: '10',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }

    const operate = ()=>{
      setshowMoreReviews(false)
    }

    //child container

    //need to style the content container relative to the modal itself
    //content container can be seperate stuff that is then built out.

  return (
    //default behavior is click anywhere to close - can customize by moving the onClick
    <div onClick={operate}>

      {showMoreReviews && <div style={modalPosition}>
        {/* Wrapper Div */}
        <div className="border" style={{maxHeight: '75%', maxWidth: '75%', zIndex: '11'}}>
        {/* <button onClick={()=>setShowModal(!showModal)}>close</button> */}
          {children}
        </div>

        </div>}


    </div>
  )
}

export default MoreReviews
