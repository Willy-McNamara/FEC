import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IG1a from './IG1a.jsx';
import IG1b from './IG1b.jsx';

const IG1 = ({style, zoomHandler, currentIndex, indexHandler}) => {
  console.log('currentIndex in IG1', currentIndex)

  let [gallery, setGallery] = useState('init')
  let [lastIndex, setLastIndex] = useState(currentIndex)

  // This useEffect allows for the async build of the mini gallery
  useEffect(() => {
    console.log('useEffect in IG1 triggered, here is current and last index', currentIndex, lastIndex)
    if (gallery === 'init' || currentIndex !== lastIndex) {
      setLastIndex(currentIndex)
      Promise.all(style.photos.map((photo, index) => {
        return (<IG1a thumbNailURL={photo.thumbnail_url} indexHandler={indexHandler} index={index} currentIndex={currentIndex}/>)
      }))
      .then((newGallery) => {
        setGallery(newGallery)
      })
      .catch((err) => {
        console.log('error in useEffect promise chain in Container1Aa', err)
      })
    }
  }, [gallery, currentIndex])

  if (gallery === 'init') {
    return (<div>Rendering photo gallery...</div>)
  } else {
    return (
      <div id="IG1">
        IG1
        <IG1b currentPhoto={style.photos[currentIndex]} zoomHandler={zoomHandler} currentIndex={currentIndex} indexHandler={indexHandler}/>
        <div id="IG1a">
          IG1a -- mini gallery
          {gallery}
        </div>
      </div>
    )
  }
}

export default IG1;