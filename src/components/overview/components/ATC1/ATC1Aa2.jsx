import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ATC1Aa2= ({size, currentSizeHandler}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  return (
    <div id="ATC1Aa2" onClick={(e) => {
      e.preventDefault();
      currentSizeHandler(size)
    }}>
      {size}
    </div>
  )
}

export default ATC1Aa2