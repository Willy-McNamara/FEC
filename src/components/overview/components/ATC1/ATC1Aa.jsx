import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1Aa1 from './ATC1Aa1.jsx';
import ATC1Aa2 from './ATC1Aa2.jsx';

const ATC1Aa= ({sizeElements, currentSize, stock, currentSizeHandler, viewSizes, sizeViewHandler}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}
  // console.log('ATC1Aa rendering, here is viewSizes :', viewSizes)

  // conditionally render the sizes view
  if (!stock) {
    <div id="ATC1Aa">
      < ATC1Aa1 currentSize={'Out of stock!'}/>
    </div>
  } else if (!viewSizes) { // render current size
    return (
      <div id="ATC1Aa">
        < ATC1Aa1 currentSize={currentSize} sizeViewHandler={sizeViewHandler}/>
      </div>
    )
  } else { // render list of sizes
    return (
      <div>
        <div id="ATC1Aa">
          < ATC1Aa1 currentSize={currentSize} sizeViewHandler={sizeViewHandler}/>
        </div>
        <div id="ATC1Aa">
          {sizeElements}
        </div>
      </div>
    )
  }
}

export default ATC1Aa