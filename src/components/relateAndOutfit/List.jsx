import React from 'react';
import Card from './Card.jsx';
import {useState} from 'react';
const List = ({listOfProducts, mainProduct, choice, removeItem, pickProduct, selectedProduct, setProduct}) => {
  const [alreadyDisplayed, setDisplay] = useState(false);
  const toggleDisplay = (bool) => {
    setDisplay(bool);
  }
  let listOfCards = listOfProducts.map((product) => {
    return <Card product={product} key={product.id} mainProduct={mainProduct} alreadyDisplayed={alreadyDisplayed} toggleDisplay={toggleDisplay} choice={choice} removeItem={removeItem} pickProduct={pickProduct} selectedProduct={selectedProduct} setProduct={setProduct}/>
  })

  return(
    <>
      {listOfCards}
    </>
  )
}


export default List;