import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1Aa1 from './ATC1Aa1.jsx';
import ATC1Aa2 from './ATC1Aa2.jsx';

const ATC1Aa= ({sizeElements, currentSize, currentSizeHandler}) => {
  let render = 0

  // STATE
  let [viewSizes, setViewSizes] = useState(false)

  // HANDLER
  let sizeViewHandler = () => {
    setViewSizes(!viewSizes)
  }

  // EFFECT
  useEffect(() => {
    // if currentSize changes, viewSizes should be false
    setViewSizes(false)
  }, [currentSize])

  // RETURN
  return (
    <div className="sizesDropdown">
      <div id="ATC1Aa">
        < ATC1Aa1 currentSize={currentSize[0]} sizeViewHandler={sizeViewHandler}/>
        <div className="sizesDDTwo">
          {sizeElements}
        </div>
      </div>
    </div>
  )
}

export default ATC1Aa


/*

const ATC1Aa= ({sizeElements, currentSize, currentSizeHandler}) => {
  let render = 0

  // STATE
  let [viewSizes, setViewSizes] = useState(false)

  // HANDLER
  let sizeViewHandler = () => {
    setViewSizes(!viewSizes)
  }

  // EFFECT
  useEffect(() => {
    // if currentSize changes, viewSizes should be false
    setViewSizes(false)
  }, [currentSize])

  // RETURN
  if (!viewSizes) { // render current size
    return (
      <div className="sizesDropdown">
        <div id="ATC1Aa">
          < ATC1Aa1 currentSize={currentSize[0]} sizeViewHandler={sizeViewHandler}/>
        </div>
      </div>
    )
  } else { // render list of sizes
    return (
      <div className="sizesDropdown">
        <div id="ATC1Aa">
          < ATC1Aa1 currentSize={currentSize[0]} sizeViewHandler={sizeViewHandler}/>
        </div>
        <div id="ATC1Aa">
          <div className="sizesDDTwo">
            {sizeElements}
          </div>
        </div>
      </div>
    )
  }

  <div id="ATC1Aa">
        < ATC1Aa1 currentSize={currentSize[0]} sizeViewHandler={sizeViewHandler}/>
      </div>
      <div id="ATC1Aa">
        <div className="sizesDDTwo">
          {sizeElements}
        </div>
      </div>

  */