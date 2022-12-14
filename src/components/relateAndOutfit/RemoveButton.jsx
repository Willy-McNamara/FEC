import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const RemoveButton = ({removeItem, productName}) => {

  return(
    <FontAwesomeIcon className="remove-button"icon={faXmark} onClick={(event) => {

      removeItem(productName);
    }}/>
  )
}

export default RemoveButton