import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1Aa from './ATC1Aa.jsx';
import ATC1Ab from './ATC1Ab.jsx';

const ATC1A= ({style}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  // add logic about style.skus being empty (need to render Out of Stock or something!)
    // this will actulay work a bit diff,.

  // need my map function to change state
  if (Object.keys(style.skus).length === 0) {
    alert('Style out of stock, no logic built to handle this yet.')
  }

  let formattedStyle = formatter(style.skus)
  // reformat data so it's easier to work with

  return (
    <div id="ATC1A">
      <ATC1Aa style={formattedStyle}/>
      <ATC1Ab style={formattedStyle}/>
    </div>
  )
}

export default ATC1A


let formatter = (obj) => {
  let reformat = [];
  for (let SKU in obj) {
    if (obj[SKU].quantity > 0) {
      let newObj = {
        sku: SKU,
        quantity: obj[SKU].quantity,
        size: obj[SKU].size
      }
      reformat.push(newObj)
    }
  }
  return reformat;
}