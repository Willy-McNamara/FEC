import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container1Aa from './Container1Aa.jsx';
import Container1Ab from './Container1Ab.jsx';

const Container1A = ({product, styles}) => {

  // console.log('Container1A render')

  //console.log('styles in C1A', styles)

  // CONTAINER 1
  let [style, setStyle] = useState(styles[0])

  // HANDLERS

  let styleHandler = (index) => {
    setStyle(styles[index])
  }
  let zoomHandler = () => {
    // setZoom(!zoom)
    let c = document.getElementById('Container1Ab')
    // console.log('logging c variable in zoomHandler', c)
    c.classList.toggle('hideContainer')
    let a = document.getElementById('Container1Aa')
    // console.log('logging a', a)
    a.classList.toggle('expander')
  }
  // let indexHandler = (index) => {
  //   setCurrentIndex(index)
  // }


  return(
    <div id="Container1A">
      <Container1Aa style={style} zoomHandler={zoomHandler}/>
      <Container1Ab product={product} style={style} styles={styles} styleHandler={styleHandler} />
    </div>
  )
}

export default Container1A;


// if (!zoom) {
//   return(
//     <div id="Container1A">
//       <Container1Aa style={style} zoomHandler={zoomHandler} zoom={zoom} indexHandler={indexHandler} currentIndex={currentIndex}/>
//       <Container1Ab product={product} style={style} styles={styles} styleHandler={styleHandler} />
//     </div>
//   )
// } else { // if zoom is true, only show container 3_1
//   return (
//     <div>
//       Container1A
//       <Container1Aa style={style} zoomHandler={zoomHandler} zoom={zoom} indexHandler={indexHandler} currentIndex={currentIndex}/>
//     </div>
//   )
// }