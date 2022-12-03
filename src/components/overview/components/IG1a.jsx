import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IG1a = ({thumbNailURL, indexHandler, isCurrent}) => {
  // THIS IS THE THUMBNAIL GALLERY

  if (isCurrent) {
    return (
      // grayed out thumbnail or something special
      <img id="thumbNailPhoto" class="mainThumbnail" src={`${thumbNailURL}`}/>
    )
  } else {
    return (
      <img id="thumbNailPhoto" src={`${thumbNailURL}`}/>
    )
  }
}

export default IG1a;