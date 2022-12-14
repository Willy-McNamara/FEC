import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX, } from '@fortawesome/free-solid-svg-icons';
const Modal = ({modalState, toggleModal, mainProduct, cardProduct, toggleDisplay, selectedProduct}) => {
  const [cardFeatures, setCardFeatures] = useState([]);
  const [mainFeatures, setMainFeatures] = useState([]);

  useEffect(() => {
    if(modalState) {
        axios.get(`/products/${selectedProduct.id}`)
        .then((selectedFeature) => {
          setMainFeatures(selectedFeature.data.features);
        })
        .then(() => {
          axios.get(`/products/${cardProduct.id}`)
          .then((cardFeatures) => {
            setCardFeatures(cardFeatures.data.features);
          })
        })
    }
  }, [modalState]);

  let allFeatures = mainFeatures.concat(cardFeatures);
  let featureList = allFeatures.map((obj) => {
    let mainHas = false;
    let compareHas = false;
    for(let i = 0; i < mainFeatures.length; i++) {
      if(mainFeatures[i].feature === obj.feature && mainFeatures[i].value === obj.value) {
        mainHas = true;
      }
    }
    for(let i = 0; i < cardFeatures.length; i++) {
      if(cardFeatures[i].feature === obj.feature && cardFeatures[i].value === obj.value) {
        compareHas = true
      }
    }
    if (mainHas === true && compareHas === true) {
      return (
        <tr>
          <td className="td-left">
            <FontAwesomeIcon icon={faCheck} className="check-icon"/>
          </td>
          <td className="td-mid">
            {obj.feature}: {obj.value}
          </td>
          <td className="td-right">
            <FontAwesomeIcon icon={faCheck} className="check-icon"/>
          </td>
        </tr>
      )
    } else if (mainHas === true && compareHas === false) {
      return (
        <tr>
          <td className="td-left">
            <FontAwesomeIcon icon={faCheck} className="check-icon"/>
          </td>
          <td className="td-mid">
            {obj.feature}: {obj.value}
          </td>
          <td className="td-right">
          </td>
        </tr>
       )
    } else {
      return (
        <tr>
          <td className="td-left">
          </td>
          <td className="td-mid">
            {obj.feature}: {obj.value}
          </td>
          <td className="td-right">
          <FontAwesomeIcon icon={faCheck} className="check-icon"/>
          </td>
        </tr>
       )
    }
  })
  return(
    <div className="container" style={{
      visibility: modalState ? 'visible' : '',
      opacity: modalState ? 1 : '',
      }}>
      <div className="modal" style={{
        visibility: modalState ? 'visible' : '',
      }}>
        <h3>Comparing</h3>
        <table className="modalTable">
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr>
          <th>{mainProduct.name}</th>
          <th>Characteristics</th>
          <th>{cardProduct.name}</th>
          </tr>
          {featureList}
        </table>
        <div className="close-button" id="closeButton" onClick={(event) => {
          // toggleDisplay();
          toggleModal(event);
        }}>close</div>
      </div>
    </div>
  )
}

export default Modal;