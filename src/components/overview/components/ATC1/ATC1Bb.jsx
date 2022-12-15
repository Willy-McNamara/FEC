import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ATC1Bb= ({style}) => {

  // style obj > sku property, obj of objs (SKUs as keys) > sku value obj contains key value pairs {quantity: 8, size: 'XS'}

  return (
    <div id="ATC1Bb" onClick={() => {
      let outfit = document.getElementsByClassName('outfit-button')
      // console.log('outfit in ATC1Bb', outfit)
      outfit[0].scrollIntoView({behavior: "smooth"})
    }}
    onMouseEnter={(e) => {
      e.target.classList.toggle('hoverBackground')
    }}
    onMouseLeave={(e) => {
      e.target.classList.toggle('hoverBackground')
    }}
    >
      <img id="heartIcon" src="heartIcon2.png" alt="Favorite!"/>
    </div>
  )
}

export default ATC1Bb