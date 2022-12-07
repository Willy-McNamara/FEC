import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ATC1Aa2= ({size, sizeViewHandler}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  return (
    <div id="ATC1Aa2" onClick={(e) => {
      e.preventDefault();
      // console.log('size onClick triggered. here is size :', size)
      sizeViewHandler(size)
    }}>
      {size}
    </div>
  )
}

export default ATC1Aa2