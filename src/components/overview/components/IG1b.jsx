import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IG1b = ({currentPhoto, zoomHandler, currentIndex, indexHandler}) => {
  // THIS IS THE CURRENT DISPLAYED PHOTO

  return (
    <div id="IG1b">
      <img id="mainPhoto" src={`${currentPhoto.url}`}/>
    </div>
  )
}

export default IG1b;