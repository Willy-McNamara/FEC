import React from 'react';
import Card from './Card.jsx';

const List = ({relatedProducts, icon, choice}) => {
  let relatedProductsList = relatedProducts.map((product) => {
    return <Card product={product} key={product.id} icon={icon} choice={choice}/>
  })
  console.log(relatedProductsList);
  return(
    <div>
      {relatedProductsList}
    </div>
  )
}

export default List;