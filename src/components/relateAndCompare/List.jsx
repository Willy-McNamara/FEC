import React from 'react';
import Card from './Card.jsx';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const List = ({relatedProducts}) => {
  const handleDragStart = (e) => e.preventDefault();
  let relatedProductsList = relatedProducts.map((product) => {
    return <Card product={product} key={product.id}/>
  })
  return(
    <AliceCarousel mouseTracking items={relatedProductsList} responsive={{
      0: {
          items: 1,
      },
      1024: {
          items: 3
      }
    }} infinite={true}/>
  )
}

export default List;