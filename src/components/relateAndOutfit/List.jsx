import React from 'react';
import Card from './Card.jsx';
import {useState} from 'react';
const List = ({listOfProducts}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  let listOfCards = listOfProducts.map((product) => {
    return <Card product={product} key={product.id} modalState={modal} toggleModal={toggleModal}/>
  })

  return(
    <>
      {listOfCards}
    </>
  )
}


export default List;