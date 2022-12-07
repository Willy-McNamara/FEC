import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1Aa from './ATC1Aa.jsx';
import ATC1Ab from './ATC1Ab.jsx';
import ATC1Aa2 from './ATC1Aa2.jsx';

const ATC1A= ({style}) => {

  // console.log('ATC1A render triggered')

  let [viewSizes, setViewSizes] = useState(false)
  let [currentSize, setCurrentSize] = useState('Size')
  let [oldStyle, setOldStyle] = useState('init')
  let [oldSize, setOldSize] = useState('Size')
  let [sizeElements, setSizeElements] = useState('init')
  let [quants, setQuants] = useState('init')

  // map sizes components
  useEffect(() => {
    //
    // console.log('useEffect in ATC1A triggered!')
    if (sizeElements === 'init' || style !== oldStyle || currentSize !== oldSize) { // OR style has changed
      //
      if (currentSize !== 'Size') {
        setViewSizes(!viewSizes)
      }
      Promise.all(style.map((info) => {
        if (currentSize === info.size) {
          setQuants(info.quantity)
          return
        } else {
          return(
            < ATC1Aa2 size={info.size} sizeViewHandler={sizeViewHandler}/>
          )
          }
      }))
      .then((sizeElements) => {
        setSizeElements(sizeElements)
        setOldStyle(style)
        setOldSize(currentSize)
      })
      .catch((err) => {
        console.log('error in ATC1Aa useEffect chain :', err)
      })
      }
  }, [currentSize])

  useEffect(() => {
    // when style changes, simulate a first render
    // if (viewState === false) {
    //   setViewSizes(true)
    // }
    // setViewSizes(!viewSizes)
    setQuants('init')
    setCurrentSize('Size')
  }, [style])

  // HANDLER
  let currentSizeHandler = (size) => {
    setCurrentSize(size)
  }

  // HANDLER
  let sizeViewHandler = (size) => {
    // toggles viewSizes true/false
    if (currentSize === size) {
      //console.log('sizeView handler triggered when size === current size')
      setViewSizes(!viewSizes)
    } else {
      currentSizeHandler(size)
    }
  }

  if (style.length === 0) { // if this style is out of stock...
    return (
      <div id="ATC1A">
        <ATC1Aa style={style} stock={false}/>
        <ATC1Ab quants={quants}/>
      </div>
    )
  } else {
    return (
      <div id="ATC1A">
        <ATC1Aa sizeElements={sizeElements} currentSize={currentSize} stock={true} currentSizeHandler={currentSizeHandler} viewSizes={viewSizes} sizeViewHandler={sizeViewHandler}/>
        <ATC1Ab quants={quants}/>
      </div>
    )
  }
}

export default ATC1A
