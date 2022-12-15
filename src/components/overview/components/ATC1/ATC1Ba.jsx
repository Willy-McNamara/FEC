import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ATC1Ba= ({style, addToCartHandler}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  return (
    <div id="ATC1Ba" onClick={(e) => {
      e.preventDefault();
      addToCartHandler();
    }}
    onMouseEnter={(e) => {
      e.target.classList.toggle('hoverBackground')
    }}
    onMouseLeave={(e) => {
      e.target.classList.toggle('hoverBackground')
    }}>
      <div id="ATC1BaText">
        ADD TO CART
      </div>
    </div>
  )
}

export default ATC1Ba