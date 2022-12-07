import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1A from './ATC1A.jsx';
import ATC1B from './ATC1B.jsx';

const ATC1 = ({style}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  // reformat data so it's easier to work with
  let formattedStyle = formatter(style.skus)

  return (
    <div id="ATC1">
      < ATC1A style={formattedStyle}/>
      < ATC1B style={formattedStyle}/>
    </div>
  )
}

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

export default ATC1;