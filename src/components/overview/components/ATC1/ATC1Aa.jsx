import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1Aa1 from './ATC1Aa1.jsx';
import ATC1Aa2 from './ATC1Aa2.jsx';

const ATC1Aa= ({style}) => {
  console.log('formatted style as "style" in ATC1Aa', style)

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  let [viewSizes, setViewSizes] = useState(false)
  let [currentSize, setCurrentSize] = useState('Size')
  let [oldStyle, setOldStyle] = useState('init')
  let [sizeElements, setSizeElements] = useState('init')

  // map sizes components

  useEffect(() => {
    //
    if (sizeElements === 'init' || style !== oldStyle) { // OR style has changed
      //
      Promise.all(style.map((info) => {
        //
        return(
          < ATC1Aa2 size={info.size} currentSizeHandler={currentSizeHandler}/>
        )
      }))
      .then((sizeElements) => {
        setSizeElements(sizeElements)
        setOldStyle(style)
      })
      .catch((err) => {
        console.log('error in ATC1Aa useEffect chain :', err)
      })
      }
  }, [style])

  useEffect(() => {
    if (currentSize !== 'Size') {
      setViewSizes(false)
    }
  }, [currentSize])

  // HANDLER
  let sizeViewHandler = () => {
    // toggles viewSizes true/false
    setViewSizes(!viewSizes)
  }
  let currentSizeHandler = (size) => {
    setCurrentSize(size)
  }

  // conditionally render the sizes view

  if (!viewSizes || sizeElements === 'init') { // render current size
    return (
      <div id="ATC1Aa">
        < ATC1Aa1 currentSize={currentSize} sizeViewHandler={sizeViewHandler}/>
      </div>
    )
  } else { // render list of sizes
    return (
      <div id="ATC1Aa">
        {sizeElements}
      </div>
    )
  }
}

export default ATC1Aa