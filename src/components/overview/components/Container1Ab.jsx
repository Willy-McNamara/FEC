import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PI1 from './PI1/PI1.jsx';
import SS1 from './SS1/SS1.jsx';
import ATC1 from './ATC1/ATC1.jsx';

const Container1Ab = ({product, style, styleHandler}) => {

  return (
    <div id="Container1Ab">
      Container1Ab
      < PI1 />
      < SS1 />
      < ATC1 />
    </div>
  )
}

export default Container1Ab;