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
  if (!viewSizes) { // render current size
    return (
      <div id="ATC1Aa">
        < ATC1Aa1 currentSize={currentSize[0]} sizeViewHandler={sizeViewHandler}/>
      </div>
    )
  } else { // render list of sizes
    return (
      <div>
        <div id="ATC1Aa">
          < ATC1Aa1 currentSize={'Size'} sizeViewHandler={sizeViewHandler}/>
        </div>
        <div id="ATC1Aa">
          {sizeElements}
        </div>
      </div>
    )
  }
}

export default ATC1Aa