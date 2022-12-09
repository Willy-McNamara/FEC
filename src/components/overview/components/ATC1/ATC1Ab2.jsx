import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ATC1Ab2= ({qty, size, sku, currentQtyHandler, cartHandler}) => {


  return (
    <div id="ATC1Ab2" onClick={(e) => {
      e.preventDefault();
      currentQtyHandler(qty, size, sku)
      cartHandler(sku, size, qty)
    }}>
      {qty}
    </div>
  )
}

export default ATC1Ab2