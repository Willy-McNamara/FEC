import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IG1b = ({currentPhoto, zoomHandler, currentIndex, indexHandler}) => {
  // THIS IS THE CURRENT DISPLAYED PHOTO

  return (
    <div>
      IG1b -- currentPhoto
      <img src={`${currentPhoto.url}`} style={{ height: 250, width: 300}}/>
    </div>
  )
}

export default IG1b;