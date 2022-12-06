import React from 'react';
import Card from './Card.jsx';
const List = ({relatedProducts}) => {
  let relatedProductsList = relatedProducts.map((product) => {
    return <Card product={product} key={product.id}/>
  })
  return(
    <div>
      {relatedProductsList}
    </div>
  )
}

export default List;