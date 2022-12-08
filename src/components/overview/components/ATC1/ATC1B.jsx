import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1Ba from './ATC1Ba.jsx';
import ATC1Bb from './ATC1Bb.jsx';

const ATC1B= ({style, addToCartHandler}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  return (
    <div id="ATC1B">
      < ATC1Ba addToCartHandler={addToCartHandler}/>
      < ATC1Bb />
    </div>
  )
}

export default ATC1B