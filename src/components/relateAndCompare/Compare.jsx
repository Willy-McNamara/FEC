import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faX, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import {useState, useEffect} from 'react';
import axios from 'axios';
const Compare = ({toggleAlreadyDisplaying, productToCompare, alreadyDisplaying, changeProductToCompare, cardProduct, mainProduct}) => {
const [popUp, setPopUp] = useState(false);
const [mainProductFeatures, setMainProductFeatures] = useState([]);
const [comparedProductFeatures, setComparedProductFeatures] = useState([])
const togglePopUp = () => {
  setPopUp(!popUp);
}
useEffect(() => {
  // was {alreadyDisplaying}
  if(popUp) {
      axios.get(`/products/${mainProduct.id}`)
      .then((features) => {
        setMainProductFeatures(features.data);
      })
      .then(() => {
        axios.get(`/products/${cardProduct.id}`)
        .then((cardFeatures) => {
          setComparedProductFeatures(cardFeatures.data);
        })
      })
}
  }, [productToCompare])
  // was {alreadyDisplaying}
  if(!popUp) {
    return (
      <FontAwesomeIcon icon={faStar} className="info-icon" onClick={(event) => {
        changeProductToCompare(cardProduct);
        togglePopUp()
        // toggleAlreadyDisplaying();
      }}/>
    )
  } else {
    let allFeatures = comparedProductFeatures.concat(mainProductFeatures);
    // let mainHas = allFeatures.map((obj) => {
    //   for(let i = 0; i < mainProductFeatures.length; i++) {
    //     // console.log('outisde');

    //     if(mainProductFeatures[i].feature === obj.feature && mainProductFeatures[i].value === obj.value) {
    //       // console.log('inside');
    //       return <FontAwesomeIcon icon={faCheck}/>
    //     } else {
    //       return <FontAwesomeIcon icon={faX}/>
    //     }
    //   }
    // })
    // let comparedHas = allFeatures.map((obj) => {
    //   for(let i = 0; i < comparedProductFeatures.length; i++) {
    //     // console.log('outisde');

    //     if(comparedProductFeatures[i].feature === obj.feature && comparedProductFeatures[i].value === obj.value) {
    //       // console.log('inside');
    //       return <FontAwesomeIcon icon={faCheck}/>
    //     } else {
    //       return <FontAwesomeIcon icon={faX}/>
    //     }
    //   }
    // })
    let featureList = allFeatures.map((obj) => {
      let mainHas = false;
      let compareHas = false;
      for(let i = 0; i < mainProductFeatures.length; i++) {
        if(mainProductFeatures[i].feature === obj.feature && mainProductFeatures[i].value === obj.value) {
          mainHas = true;
        }
      }
      for(let i = 0; i < comparedProductFeatures.length; i++) {
        if(comparedProductFeatures[i].feature === obj.feature && comparedProductFeatures[i].value === obj.value) {
          compareHas = true
        }
      }

      if (mainHas === true && compareHas === true) {
        return (
          <div className="compare-item">
        <FontAwesomeIcon icon={faCheck} className="check-icon"/> {obj.feature}: {obj.value} <FontAwesomeIcon icon={faCheck} className="check-icon"/>
        </div>
        )
      } else if (mainHas === true && compareHas === false) {
        return (
          <div  className="compare-item">
          <FontAwesomeIcon icon={faCheck} className="check-icon"/> {obj.feature}: {obj.value}
          </div>
         )
      } else {
        return (
          <div className="compare-item">
            {obj.feature}: {obj.value} <FontAwesomeIcon icon={faCheck} className="check-icon"/>
          </div>
         )
      }
    })
    return (
      <div className="comparison">
        <FontAwesomeIcon icon={faX} className="close-x-button" onClick={(event) => {
        // toggleAlreadyDisplaying();
        togglePopUp();
      }}/>
      <p>comparing <br/>
      <b>{mainProduct.name}</b> to <b>{cardProduct.name}</b>
      </p>
      {featureList}
      </div>
    )
  }
}



export default Compare;