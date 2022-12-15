import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IG1bZ from './IG1bZ.jsx';
import IG1bX from './IG1bX.jsx';

const IG1b = ({currentPhoto, zoomHandler, currentIndex, indexHandler, gallery}) => {
  // THIS IS THE CURRENT DISPLAYED PHOTO
  let [mouse, setMouse] = useState('none')
  let [magnified, setMagnified] = useState('zoom-in')
  let [iconGallery, setIconGallery] = useState([])
  let [zoom, setZoom] = useState('')

  // useEffect(() => {
  //   if (zoom) {
  //     setMagnified('zoom-out')
  //   } else {
  //     setMagnified('zoom-in')
  //   }
  // }, [zoom])

  let miniHandler = () => {
    setZoom(Math.random())
  }

  useEffect(() => {
    // when galleryLength or currentIndex changes, rerender the array of icon components
    Promise.all(gallery.map((photo, index) => {
      return (<IG1bX indexHandler={indexHandler} index={index} currentIndex={currentIndex}/>)
    }))
    .then((newGallery) => {
      setIconGallery(newGallery)
    })
    .catch((err) => {
      console.log('error in useEffect promise chain in IG1b', err)
    })
  }, [gallery, currentIndex])

  return (
    <div id="IG1b">
      <img id="mainPhoto" class={mouse} src={`${currentPhoto.url}`}
      onMouseEnter={() => {
        setMouse(magnified)
      }}
      onMouseLeave={() => {
        setMouse(magnified)
      }}
      onClick={(e) => {
        e.preventDefault()
        zoomHandler()
        miniHandler()
      }}/>
      < IG1bZ currentPhoto={currentPhoto} zoom={zoom}/>
      <div id="iconGall">
          {iconGallery}
      </div>
    </div>
  )
}

export default IG1b;