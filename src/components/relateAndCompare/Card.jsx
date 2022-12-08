import React from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
const Card = ({product, icon}) => {
  const [img, setImg] = useState('');
  const [reviewScores ,setReviewScores ] = useState('init');
  const changeReviewScores = (review) => {
    setReviewScores;
  }
  const changeImg = (img) => {
    setImg(img);
  }
  useEffect(() => {
    if(img === '') {
      axios.get(`http://localhost:3001/productStyles/${product.id}`)
      .then((res) => {
        let image;
        //console.log('res.data from get styles in Overview.jsx', res.data)
        let result = Math.floor(Math.random()*res.data.results.length);
        // changeImg(res.data.results[1].photos[1].thumbnail_url);
        let photo = Math.floor(Math.random()*res.data.results[result].photos.length);
        if (res.data.results[result].photos[photo].thumbnail_url === null || undefined) {
          image = 'https://img2.storyblok.com/0x380/filters:no_upscale()/f/40252/1280x740/c07d80baff/streamline_1280x740.jpg'
        } else {
          image = res.data.results[result].photos[photo].thumbnail_url
        }
        changeImg(image);
      }).then(() => {
        if (reviewScores === 'init') {
          axios.get(`/averageReviews/${product.id}`)
          .then((res)=>{setReviewScores(res.data)})
          .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
      }})
    }
  }, [product]);
  return(
    <div className="card">
      {/* <FontAwesomeIcon icon={icon} className="relate-icon"></FontAwesomeIcon> */}
      <img src={img} className="cardImg"/>
      <br/>
      <div className="card-detail">
        <p className="card-category">{product.category}</p>
        <p className="card-name">{product.name}</p>
        <p className="card-price">${product.default_price}</p>
        <p className="card-sale-price">sale price</p>
        <p className="card-sale-price">{product.sale_price}</p>
        <StarRating review={reviewScores}/>
      </div>
    </div>
  )
}



export default Card;