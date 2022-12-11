import React, {useEffect, useState} from 'react';
import StarRating from './StarRating.jsx';
import CompareButton from './CompareButton.jsx';
import axios from 'axios';
import Modal from './Modal.jsx';
const Card = ({product, modalState, toggleModal}) => {
  const [defaultStyle, setDefaultStyle] = useState([]);
  const [reviewScore, setReviewScore] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [reviewScores ,setReviewScores ] = useState('init');
  // const [modal, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal(!modal);
  // }
  useEffect(() => {
    if(imageUrl === '') {
      axios.get(`http://localhost:3001/productStyles/${product.id}`)
      .then((res) => {
        let image;
        //console.log('res.data from get styles in Overview.jsx', res.data)
        console.log(res);
        let productStyles = res.data.results
        let chosenStyle;
        let foundDefault = false;
        productStyles.forEach((style) => {
          if(style['default?'] === true) {
            chosenStyle = style;
            foundDefault = true
          }
        })
        if(foundDefault === false) {
          chosenStyle = productStyles[0]
        }
        // changeImg(res.data.results[1].photos[1].thumbnail_url);
        if (chosenStyle.photos[0].thumbnail_url === null || undefined) {
          image = 'https://img2.storyblok.com/0x380/filters:no_upscale()/f/40252/1280x740/c07d80baff/streamline_1280x740.jpg'
        } else {
          image = chosenStyle.photos[0].thumbnail_url;
        }
        setDefaultStyle(chosenStyle)
        setImageUrl(image);
      }).then(() => {
        if (reviewScores === 'init') {
          axios.get(`/averageReviews/${product.id}`)
          .then((res)=>{setReviewScores(res.data)})
          .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
      }})
    }

  }, [])

  return(
    <div className="card" id={`card&productID=${product.id}?styleID=${defaultStyle['style_id']}`}>
      <CompareButton toggleModal={toggleModal}/>
      <img src={imageUrl} className="cardImage" id={`relatedCardImage&productID=${product.id}?styleID=${defaultStyle['style_id']}`}/>
      <div className="detail-container" id="detailContainer&noID">
        {product.category}
        <b>{product.name}</b>
        ${defaultStyle.original_price}
        <StarRating review={reviewScores}/>
        <Modal modalState={modalState} toggleModal={toggleModal}/>
      </div>
    </div>
  )
}


export default Card;