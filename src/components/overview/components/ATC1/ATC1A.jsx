import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1Aa from './ATC1Aa.jsx';
import ATC1Ab from './ATC1Ab.jsx';
import ATC1Aa2 from './ATC1Aa2.jsx';

const ATC1A= ({sizesArray, quantsPerSize, cartHandler}) => {

  // STATE
  let [currentSize, setCurrentSize] = useState(['SIZE'])
  let [sizeElements, setSizeElements] = useState('init')

  // HANDLER
  let currentSizeHandler = (sku) => {
    // sets currentSize equal to an array containing size [0] and totals quants [1]
    setCurrentSize(quantsPerSize[sku])
  }
  // EFFECTs
  useEffect(() => { // map sizes components on initial render, and if sizesArray changes
    if (sizeElements === 'init') {
      Promise.all(sizesArray.map((info) => {
        return(
          < ATC1Aa2 size={info.size} sku={info.sku} currentSizeHandler={currentSizeHandler}/>
        )
      }))
      .then((sizeElements) => {
        setSizeElements(sizeElements)
      })
      .catch((err) => {
        console.log('error in ATC1Aa useEffect chain :', err)
      })
      }
  }, [sizesArray])

  if (sizesArray.length === 0) { // if this style is out of stock...
    return (
      <div id="ATC1A">
        OUT OF STOCK
      </div>
    )
  } else {
    return (
      <div id="ATC1A">
        <ATC1Aa sizeElements={sizeElements} currentSize={currentSize} currentSizeHandler={currentSizeHandler}/>
        <ATC1Ab currentSize={currentSize} cartHandler={cartHandler}/>
      </div>
    )
  }
}

export default ATC1A
