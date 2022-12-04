import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PI1Ba from './PI1Ba.jsx';
import PI1Bb from './PI1Bb.jsx';

const PI1B = ({product}) => {

  return (
    <div id="PI1B">
      < PI1Ba category={product.category}/>
      < PI1Bb name={product.name}/>
    </div>
  )
}

export default PI1B;