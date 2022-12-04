import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PI1A from './PI1A.jsx';
import PI1B from './PI1B.jsx';
import PI1C from './PI1C.jsx';

const PI1 = ({}) => {

  return (
    <div id="PI1">
      < PI1A />
      < PI1B />
      < PI1C />
    </div>
  )
}

export default PI1;