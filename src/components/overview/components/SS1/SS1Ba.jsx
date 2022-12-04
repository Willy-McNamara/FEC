import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SS1Ba = ({thumbnail, isSelected, styleHandler, index}) => {

  if (thumbnail === 'fake') {
    return (<div id="fakeSS1Ba"></div>)
  } else if  (isSelected) {
    return (
      // special render with checkmark
      <div id="SS1Ba">
        <img id="SSThumbnail" src={`${thumbnail}`} index={index}/>
      </div>
    )
  } else {
    //normal render as a thumbnail div
    return (
      <div id="SS1Ba">
        <img id="SSThumbnail" src={`${thumbnail}`} index={index}/>
      </div>
    )
  }
}

export default SS1Ba;