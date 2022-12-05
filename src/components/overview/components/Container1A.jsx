import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container1Aa from './Container1Aa.jsx';
import Container1Ab from './Container1Ab.jsx';

const Container1A = ({product, styles}) => {

  //console.log('styles in C1A', styles)

  // CONTAINER 1
  let [zoom, setZoom] = useState(false)
  let [style, setStyle] = useState(styles[0])
  let [currentIndex, setCurrentIndex] = useState(0)

  // HANDLERS

  let styleHandler = (index) => {
    setStyle(styles[index])
    setCurrentIndex(0)
  }
  let zoomHandler = () => {
    setZoom(!zoom)
  }
  let indexHandler = (index) => {
    setCurrentIndex(index)
  }


  if (!zoom) {
    return(
      <div id="Container1A">
        <Container1Aa style={style} zoomHandler={zoomHandler} zoom={zoom} indexHandler={indexHandler} currentIndex={currentIndex}/>
        <Container1Ab product={product} style={style} styles={styles} styleHandler={styleHandler} />
      </div>
    )
  } else { // if zoom is true, only show container 3_1
    return (
      <div>
        Container1A
        <Container1Aa style={style} zoomHandler={zoomHandler} zoom={zoom} indexHandler={indexHandler} currentIndex={currentIndex}/>
      </div>
    )
  }
}

export default Container1A;