import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1Ab1 from './ATC1Ab1.jsx';
import ATC1Ab2 from './ATC1Ab2.jsx';

const ATC1Ab= ({currentSize, cartHandler}) => {
  // conditional render for first load.
  if (currentSize[0] === 'SIZE') {
    return (
      <div id="ATC1Ab">
        <ATC1Ab1 qty={'QTY'} quantViewHandler={()=>{}}/>
      </div>
    )
  }
  let [currentQty, setCurrentQty] = useState(['QTY'])
  let [qtyElements, setQtyElements] = useState('init')
  let [viewQuants, setViewQuants] = useState(false)
  // mapping funciton for all available quants up to 15

  // HANDLERs
  let currentQtyHandler = (qty, size, sku) => {
    setCurrentQty([qty, size, sku])
  }
  let quantViewHandler = () => {
    setViewQuants(!viewQuants)
  }

  // Effects
  useEffect(() => {
    // format quants to mapable array
    let quantArray = formatQuantArray(currentSize[1])
    // MAP elements
    Promise.all(quantArray.map((qty) => {
      return (
        < ATC1Ab2 qty={qty} size={currentSize[0]} sku={currentSize[2]} currentQtyHandler={currentQtyHandler} cartHandler={cartHandler}/>
      )
    }))
    .then((elements) => {
      setQtyElements(elements)
    })
    .catch((err) => {
      console.log('error in promiseChain within ATC1Ab :', err)
    })
  }, [currentSize])

  useEffect(() => {
    setViewQuants(false)
  }, [currentQty])

  useEffect(() => {
    setCurrentQty(['QTY'])
  }, [qtyElements])

  // RETURN
  return (
    <div id="ATC1Ab" onMouseEnter={(e) => {
      e.target.classList.toggle('hoverBackground')
    }}
    onMouseLeave={(e) => {
      e.target.classList.toggle('hoverBackground')
    }}>
      <ATC1Ab1 qty={currentQty[0]} quantViewHandler={quantViewHandler}/>
      <div className="qtyDD">
        {qtyElements}
      </div>
    </div>
  )
}

// HELPER

let formatQuantArray = (quant) => {
  let quantArray = [];
  let elements = 15;
  if (quant < 15) {
    elements = quant
  }
  for (let i = 0; i < elements; i++) {
    if (i === 15) {
      break;
    } else {
      quantArray.push(i+1)
    }
  }
  return quantArray
}

export default ATC1Ab

// // RETURN
// if (!viewQuants) {
//   return (
//     <div id="ATC1Ab">
//       <ATC1Ab1 qty={currentQty[0]} quantViewHandler={quantViewHandler}/>
//     </div>
//   )
// } else {