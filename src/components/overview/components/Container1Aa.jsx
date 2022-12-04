import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IG1 from './IG1/IG1.jsx';

const Container1Aa = ({style, zoomHandler, zoom, indexHandler, currentIndex}) => {

  return (
    <div id="Container1Aa">
      Container1Aa
      <IG1 style={style} zoomHandler={zoomHandler} zoom={zoom} currentIndex={currentIndex} indexHandler={indexHandler}/>
    </div>
  )
}

export default Container1Aa;