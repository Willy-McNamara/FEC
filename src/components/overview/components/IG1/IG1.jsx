import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IG1a from './IG1a.jsx';
import IG1b from './IG1b.jsx';

const IG1 = ({style, zoomHandler}) => {
  // console.log('IG1 render')

  let [gallery, setGallery] = useState('init')
  let [lastIndex, setLastIndex] = useState(currentIndex)
  let [currentIndex, setCurrentIndex] = useState(0)

  // This useEffect allows for the async build of the mini gallery
  useEffect(() => {
    // console.log('thumbnail gallery rendered')
    Promise.all(style.photos.map((photo, index) => {
      return (<IG1a thumbNailURL={photo.thumbnail_url} indexHandler={indexHandler} index={index} currentIndex={currentIndex}/>)
    }))
    .then((newGallery) => {
      setLastIndex(currentIndex)
      setCurrentIndex(0)
      setGallery(newGallery)
    })
    .catch((err) => {
      console.log('error in useEffect promise chain in Container1Aa', err)
    })
  }, [style])

  // using this useEffect to trigger reRenders when style changes
  // useEffect(() => {
  //   setGallery('init')
  // }, [style])

  let indexHandler = (index) => {
    setCurrentIndex(index)
  }

  if (gallery === 'init') {
    // console.log('gallery === init in IG1 occured')
    return (<div id="containerTransition"></div>)
  } else {
    return (
      <div id="IG1">
        <IG1b currentPhoto={style.photos[currentIndex]} zoomHandler={zoomHandler} currentIndex={currentIndex} indexHandler={indexHandler} gallery={gallery}/>
        <div id="IG1a">
          {gallery}
        </div>
      </div>
    )
  }
}

export default IG1;

// if (gallery === 'init' || currentIndex !== lastIndex) {
//   console.log('thumbnail gallery rendered')
//   Promise.all(style.photos.map((photo, index) => {
//     return (<IG1a thumbNailURL={photo.thumbnail_url} indexHandler={indexHandler} index={index} currentIndex={currentIndex}/>)
//   }))
//   .then((newGallery) => {
//     setLastIndex(currentIndex)
//     setCurrentIndex(0)
//     setGallery(newGallery)
//   })
//   .catch((err) => {
//     console.log('error in useEffect promise chain in Container1Aa', err)
//   })
// }