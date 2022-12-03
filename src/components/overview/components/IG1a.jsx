import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IG1a = ({thumbNailURL, indexHandler, index, currentIndex}) => {
  // THIS IS THE THUMBNAIL GALLERY
  let [hovered, setHovered] = useState('none')

  let hoverHandler = () => {

  }

  console.log('logging the changing hovered', hovered)

  if (index === currentIndex) {
    return (
      // grayed out thumbnail or something special
      <img id="thumbNailPhoto" class="mainThumbnail" src={`${thumbNailURL}`} index={index}/>
    )
  } else {
    return (
      <img id="thumbNailPhoto" class={hovered} src={`${thumbNailURL}`} index={index} onMouseEnter={(e) => {
        setHovered(index)
      }}
      onClick={(e) => {
        e.preventDefault()
        indexHandler(index)
      }}/>
    )
  }
}

export default IG1a;