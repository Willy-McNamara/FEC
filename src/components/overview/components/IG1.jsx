import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IG1a from './IG1a.jsx';
import IG1b from './IG1b.jsx';

const IG1 = ({style, zoomHandler, currentIndex, indexHandler}) => {

  let [gallery, setGallery] = useState('init')

  // This useEffect allows for the async build of the mini gallery
  useEffect(() => {
    if (gallery === 'init') {
      Promise.all(style.photos.map((photo, index) => {
        let isCurrent = false;
        if (index === currentIndex) {
          isCurrent = true;
        }
        return (<IG1a thumbNailURL={photo.thumbnail_url} indexHandler={indexHandler} isCurrent={isCurrent}/>)
      }))
      .then((newGallery) => {
        setGallery(newGallery)
      })
      .catch((err) => {
        console.log('error in useEffect promise chain in Container1Aa', err)
      })
    }
  }, [gallery])

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