import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IG1a = ({thumbNailURL, indexHandler, isCurrent}) => {
  // THIS IS THE THUMBNAIL GALLERY
  (console.log('Made it to IG1a'))

  if (isCurrent) {
    return (
      // grayed out thumbnail or something special
      <img src={`${thumbNailURL}`} style={{ height: 50, width: 60, border: '8px', borderColor: 'green'}}/>
    )
  } else {
    return (
      <img src={`${thumbNailURL}`} style={{ height: 50, width: 60}}/>
    )
  }
}

export default IG1a;