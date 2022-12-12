import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SS1A = ({style}) => {

  return (
    <div id="SS1A">
      <div id="styleInd">
        STYLE
      </div>
      <div id="styleName">
        {style.name.toUpperCase()}
      </div>
    </div>
  )
}

export default SS1A;