import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PI1A from './PI1A.jsx';
import PI1B from './PI1B.jsx';
import PI1C from './PI1C.jsx';

const PI1 = ({product, style}) => {
  // console.log('product in pi1', product);
  return (
    <div id="PI1">
      < PI1A id={product.id}/>
      < PI1B product={product}/>
      < PI1C style={style}/>
    </div>
  )
}

export default PI1;