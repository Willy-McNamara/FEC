import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const RemoveButton = ({removeItem, productName}) => {
  console.log('productName in remove button', productName);
  console.log('check to see if removeitem is a function', removeItem)
  return(
    <FontAwesomeIcon className="remove-button"icon={faXmark} onClick={(event) => {

      console.log('product name in remove item', productName, 'asd');
      removeItem(productName);
    }}/>
  )
}

export default RemoveButton