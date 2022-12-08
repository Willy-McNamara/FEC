import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ATC1Ba= ({style, addToCartHandler}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  return (
    <div id="ATC1Ba" onClick={(e) => {
      e.preventDefault();
      addToCartHandler();
    }}>
      Add to Cart
    </div>
  )
}

export default ATC1Ba