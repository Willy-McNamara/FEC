import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IG1bX = ({indexHandler, index, currentIndex}) => {
  // THIS IS THE ICON GALLERY

  if (index === currentIndex) {
    return (
      <img id="thumbnailIcon" src="rectIcon2.png" index={index} onClick={(e) => {
        e.preventDefault()
        indexHandler(index)
      }}/>
    )
  } else {
    return (
      <img id="thumbnailIcon" src="rectIcon.png" index={index} onClick={(e) => {
        e.preventDefault()
        indexHandler(index)
      }}/>
    )
  }
}

export default IG1bX;