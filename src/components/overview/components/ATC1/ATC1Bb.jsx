import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ATC1Bb= ({style}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  return (
    <div id="ATC1Bb">
      <img id="heartIcon" src="heartIcon.png" alt="Favorite!"/>
    </div>
  )
}

export default ATC1Bb