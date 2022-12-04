import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SS1A from './SS1A.jsx';
import SS1B from './SS1B.jsx';

const SS1 = ({style, styles, styleHandler}) => {

  console.log('style and styles in SS1', style, styles)

  return (
    <div id="SS1">
      SS1
      < SS1A style={style} />
      < SS1B style={style} styles={styles} styleHandler={styleHandler}/>
    </div>
  )
}

export default SS1;