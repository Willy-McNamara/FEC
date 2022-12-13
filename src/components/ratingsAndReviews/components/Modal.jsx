import React, { useState, useEffect } from 'react';
import styled from 'styled-components'


const Modal = ({showModal, setShowModal, children}) => {

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

    // const openAndClose = ()=>{
    //   setShowModal(false)
    // }

    //child container

    //need to style the content container relative to the modal itself
    //content container can be seperate stuff that is then built out.

  return (
    <div>

      {showModal && <div style={modalPosition}>
        {/* Wrapper Div */}
        <div className="border" style={{maxHeight: '75%', maxWidth: '75%', zIndex: '11'}}>
          <button onClick={()=>setShowModal(!showModal)}>close</button>
          {children}

        </div>

        </div>}


    </div>
  )
}

export default Modal;

// //OLD CODE
// const Modal = ({ photo }) => {
//     const {id, url} = photo;
//     const [showModal, setShowModal ] = useState(false) ;

//     const modalPosition = {
//       position:'fixed',
//       width: '85%',
//       height: '85%',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       background: '#F1F1F1',
//       zIndex: '10',
//       display: 'flex',
//       justContent: 'center',
//       alignItems: 'center',
//       }

//       //need to style the content container relative to the modal itself

//       //content container can be seperate stuff that is then built out.

//     return (
//       <div onClick={()=>setShowModal(!showModal)}>

//         {showModal && <div style={modalPosition}>
//           <h4 >MODAL!</h4>
//           <div style={{maxHeight: '75%', maxWidth: '75%'}}><img src={`${url}`} style={{maxHeight: '75%', maxWidth: '75%'}}/></div>
//           {/* <div onClick={()=>setShowModal(!showModal)}><button>CLOSE IT</button></div> */}
//           </div>}
//         {/*will need to mount this on picture for example, or review button  */}
//         <img
//         onClick={e => {setShowModal(!showModal)}}
//         src={`${url}`} style={{height: '50px', width: '50px'}}
//         />

//       </div>
//     )
//   }
