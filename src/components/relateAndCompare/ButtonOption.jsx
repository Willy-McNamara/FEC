import React from 'react';
import Compare from './Compare.jsx';

const ButtonOption = ({choice}) => {
  if(choice === 'compare') {
    return(
      <Compare />
    )
  }
}

export default ButtonOption;