import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PI1 from './PI1/PI1.jsx';
import SS1 from './SS1/SS1.jsx';
import ATC1 from './ATC1/ATC1.jsx';

const Container1Ab = ({product, style, styles, styleHandler}) => {

  return (
    <div id="Container1Ab">
      Container1Ab
      < PI1 product={product} style={style} styles={styles}/>
      < SS1 styleHandler={styleHandler} style={style} styles={styles}/>
      < ATC1 />
    </div>
  )
}

export default Container1Ab;