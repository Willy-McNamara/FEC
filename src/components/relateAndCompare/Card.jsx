import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
const Card = ({product}) => {
  const [img, setImg] = useState('');
  const changeImg = (img) => {
    setImg(img);
  }
  useEffect(() => {
    if(img === '') {
      axios.get(`http://localhost:3001/productStyles/${product.id}`)
      .then((res) => {
        //console.log('res.data from get styles in Overview.jsx', res.data)
        let result = Math.floor(Math.random()*res.data.results.length);
        // changeImg(res.data.results[1].photos[1].thumbnail_url);
        let photo = Math.floor(Math.random()*res.data.results[result].photos.length);
        changeImg(res.data.results[result].photos[photo].thumbnail_url);

      })
    }
  }, [img]);
  return(
    <div>
      <img src={img}/>
      <br/>
      <div>
        {product.category} <br/>
        {product.name}  <br/>
        {product.default_price} <br/>
        ****
      </div>
    </div>
  )
}



export default Card;