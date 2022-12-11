import React from 'react';
import axios from 'axios';
import Related from './Related.jsx';
const RelateAndOutfit = ({mainProduct}) => {
  return(
    <div className="relate-and-outfit-carousel-container" id="relate-and-outfit-carousel-container">
      <Related mainProduct={mainProduct}/>
    </div>
  )
}

export default RelateAndOutfit