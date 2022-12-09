import React from 'react';
import Compare from './Compare.jsx';

const ButtonOption = ({choice, toggleAlreadyDisplaying, alreadyDisplaying, productToCompare, changeProductToCompare, cardProduct, mainProduct}) => {
  if(choice === 'compare') {

    return(
      <Compare toggleAlreadyDisplaying={toggleAlreadyDisplaying} productToCompare={productToCompare} changeProductToCompare={changeProductToCompare} alreadyDisplaying={alreadyDisplaying} cardProduct={cardProduct} mainProduct={mainProduct}/>
    )
  }
}

export default ButtonOption;