import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ATC1Ab2= ({qty, quantViewHandler}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  return (
    <div id="ATC1Ab2" onClick={(e) => {
      e.preventDefault();
      quantViewHandler(qty)
    }}>
      {qty}
    </div>
  )
}

export default ATC1Ab2