import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SS1Ba from './SS1Ba.jsx';

const SS1B = ({style, styles, styleHandler}) => {

  let [stylesList, setStylesList] = useState('init')
  // should map all styles as SS1Ba's

  useEffect(() => {
    styles = stylesHelper(styles) // adds fake styles for spacing purposes
    Promise.all(styles.map((currStyle, index) => {
      // gotta render each style thumbnail
      let isSelected = false;
      if (currStyle.style_id === style.style_id) {
        isSelected = true;
      }
      return (< SS1Ba thumbnail={currStyle.photos[0].thumbnail_url} isSelected={isSelected} styleHandler={styleHandler} index={index}/>)
    }))
    .then((SS1Bas) => {
      setStylesList(SS1Bas)
    })
    .catch((err) => {
      console.log('error in SS1B useEffect', err)
    })
  }, [styles, style])

  if (stylesList === 'init') {
    return (<div> Loading Styles Selector! </div>)
  } else {
    return (
      <div id="SS1B">
        {stylesList}
      </div>
    )
  }
}

// Even styles helper

// subtract remainder of styles.length / 4 from 4.
// add that many fake style styles!

let stylesHelper = (styles) => {
  let numOfFakeStyles = 4 - (styles.length % 4)
  let fakeStyles = [];
  for (let i = 0; i < numOfFakeStyles; i++) {
    fakeStyles.push({
      style_id: 0,
      photos: [{thumbnail_url: 'fake'}]
    })
  }
  return styles.concat(fakeStyles);
}



export default SS1B;