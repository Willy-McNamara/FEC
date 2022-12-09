import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ATC1A from './ATC1A.jsx';
import ATC1B from './ATC1B.jsx';

const ATC1 = ({style}) => {

  let [cart, setCart] = useState('init')

  // reformat data so it's easier to work with
  let sizesArray = sizeFormatter(style.skus)
  let quantsPerSize = quantFormatter(sizesArray)
  useEffect(() => {
    sizeFormatter(style.skus)
    quantFormatter(sizesArray)
  }, [style])

  // HANDLER for cart ops
  let cartHandler = (sku, size, qty) => {
    setCart([sku, size, qty])
  }
  let addToCartHandler = () => {
    if (cart !== 'init') {
      alert(`${cart[2]} of Item (SKU id: ${cart[0]}) in size ${cart[1]} are now in your cart!`)
    }
  }

  return (
    <div id="ATC1" onClick={(e) => {
      if (e.target.id === 'ATC1Aa1' || e.target.id === 'ATC1Aa2') {
        let c = document.getElementsByClassName("sizesDDTwo")
        console.log('c[0] in click handler for ATC', c[0])
        c[0].classList.toggle('active')
      }
      console.log('ATC onClick e.target.id', e.target.id)}}>
      < ATC1A sizesArray={sizesArray}  quantsPerSize={quantsPerSize} cartHandler={cartHandler}/>
      < ATC1B sizesArray={sizesArray} addToCartHandler={addToCartHandler}/>
    </div>
  )
}

let sizeFormatter = (obj) => {
  let reformat = [];
  let sizes = {}
  for (let SKU in obj) {
    if (obj[SKU].quantity > 0 && !sizes[obj[SKU].size]) {
      let newObj = {
        sku: SKU,
        quantity: obj[SKU].quantity,
        size: obj[SKU].size
      }
      sizes[obj[SKU].size] = 1;
      reformat.push(newObj)
    }
  }
  return reformat;
}

let quantFormatter = (arr) => {
  // creates an obj with indexes size and qty by SKU
  let result = {}
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].sku] = [arr[i].size, arr[i].quantity, arr[i].sku]
  }
  return result;
}

export default ATC1;