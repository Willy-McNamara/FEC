import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IG1 from './IG1/IG1.jsx';

const Container1Aa = ({style, zoomHandler}) => {

  return (
    <div id="Container1Aa">
      <IG1 style={style} zoomHandler={zoomHandler}/>
    </div>
  )
}

export default Container1Aa;