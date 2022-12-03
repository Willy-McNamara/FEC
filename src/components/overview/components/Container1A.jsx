import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container1Aa from './Container1Aa.jsx';
import Container1Ab from './Container1Ab.jsx';

const Container1A = ({product, styles}) => {
  // CONTAINER 1
  let [zoom, setZoom] = useState(false)
  let [style, setStyle] = useState(styles[0])
  // make request to the API to get the styles data for this particular product


  // HANDLERS

  let styleHandler = () => {
    // does something
  }
  let zoomHandler = () => {
    // does somethin
  }


  if (!zoom) {
    return(
      <div id="Container1A">
        <Container1Aa style={style} zoomHandler={zoomHandler}/>
        <Container1Ab product={product} style={style} styleHandler={styleHandler} />
      </div>
    )
  } else { // if zoom is true, only show container 3_1
    return (
      <div>
        Container1A
        <Container1Aa style={style} zoomHandler={zoomHandler}/>
      </div>
    )
  }
}

export default Container1A;