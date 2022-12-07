import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1Ab1 from './ATC1Ab1.jsx';
import ATC1Ab2 from './ATC1Ab2.jsx';

const ATC1Ab= ({quants}) => {
  //console.log('ATC1Ab render triggered')

  if (quants === 'init') {
    return
  }

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}
  let [viewQuants, setViewQuants] = useState(true)
  let [currentQty, setCurrentQty] = useState('Select Qty')
  let [qtyElements, setQtyElements] = useState('init')
  let [oldQty, setOldQty] = useState('init')
  let quantArray = [];

  for (let i = 0; i < quants; i++) {
    if (i === 15) {
      break;
    } else {
      quantArray.push(i+1)
    }
  }
  // mapping funciton for all available quants up to 15

  useEffect(() => {
    //
    Promise.all(quantArray.map((qty) => {
      return (
        < ATC1Ab2 qty={qty} quantViewHandler={quantViewHandler}/>
      )
    }))
    .then((elements) => {
      //
      setQtyElements(elements)
      setOldQty(currentQty)
    })
    .catch((err) => {
      console.log('error in promiseChain within ATC1Ab :', err)
    })
  }, [quants, currentQty])

  // HANDLER
  let currentQtyHandler = (qty) => {
    setCurrentQty(qty)
  }

  // HANDLER
  let quantViewHandler = (qty) => {
    // toggles viewSizes true/false
    if (currentQty === qty) {
      setViewQuants(!viewQuants)
    } else {
      currentQtyHandler(qty)
    }
  }

  useEffect(() => {
    //
    setViewQuants(!viewQuants)
  }, [currentQty])

  if (!viewQuants) {
    return (
      <div id="ATC1Ab">
        <ATC1Ab1 qty={currentQty} quantViewHandler={quantViewHandler}/>
      </div>
    )
  } else {
    return (
      <div id="ATC1Ab">
        {qtyElements}
      </div>
    )
  }
}

export default ATC1Ab