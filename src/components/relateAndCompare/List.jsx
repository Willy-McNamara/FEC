import React from 'react';
import Card from './Card.jsx';
import {useState} from 'react';
const List = ({relatedProducts, icon, choice, mainProduct}) => {
  const [productToCompare, setProductToCompare] = useState({});
  const [alreadyDisplaying, setAlreadyDisplaying] = useState(false);
  const toggleAlreadyDisplaying = () => {
    setAlreadyDisplaying(!alreadyDisplaying);
  }
  const changeProductToCompare = (product) => {
    setProductToCompare(product)
  }

  let relatedProductsList = relatedProducts.map((product) => {
    return <Card product={product} key={product.id} icon={icon} choice={choice} productToCompare={productToCompare} changeProductToCompare={changeProductToCompare} alreadyDisplaying={alreadyDisplaying} toggleAlreadyDisplaying={toggleAlreadyDisplaying} mainProduct={mainProduct}/>
  })
  return(
    <div>
      {relatedProductsList}
    </div>
  )
}

export default List;