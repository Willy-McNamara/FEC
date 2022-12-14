import React, {useEffect, useState} from 'react';
import StarRating from './StarRating.jsx';
import CompareButton from './CompareButton.jsx';
import axios from 'axios';
import Modal from './Modal.jsx';
import RemoveButton from './RemoveButton.jsx';
const Card = ({product, mainProduct, alreadyDisplayed, toggleDisplay, pickProduct, choice, removeItem, selectedProduct, setProduct}) => {
  const [defaultStyle, setDefaultStyle] = useState([]);
  const [reviewScore, setReviewScore] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [reviewScores ,setReviewScores ] = useState('init');
  const [modal, setModal] = useState(false);
  console.log('this is the selected product', selectedProduct)
  console.log('product in card', product);
  const toggleModal = (e) => {
    // e.preventDefault();
    if (alreadyDisplayed === false) {
      setModal(true);
      toggleDisplay(true);
    } else if(e.target.id === 'closeButton') {
      setModal(false);
      toggleDisplay(false);
    }
  }
  console.log(setProduct);
  let button;
  if (choice === 'relate') {
    button = <CompareButton toggleModal={toggleModal} toggleDisplay={toggleDisplay}/>
  }
  else {
    button = <RemoveButton  productName={product.name} removeItem={removeItem}/>
  }
  useEffect(() => {
    if(imageUrl === '') {
      axios.get(`http://localhost:3001/productStyles/${product.id}`)
      .then((res) => {
        let image;
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
    <div className="card" id={`card&productID=${product.id}?styleID=${defaultStyle['style_id']}`}
    // onClick={(event) => {
    //   pickProduct(product);
    // }}
    >
      {button}
      <img src={imageUrl} className="cardImage" id={`relatedCardImage&productID=${product.id}?styleID=${defaultStyle['style_id']}` } onClick={(event) => {
        setProduct(product);
      }}/>
      <div className="detail-container" id="detailContainer&noID" onClick={(event) => {
        setProduct(product);
      }}>
        {product.category}
        <b>{product.name}</b>
        ${defaultStyle.original_price}
        <StarRating review={reviewScores}/>
        </div>
        <Modal modalState={modal} toggleModal={toggleModal} mainProduct={mainProduct} cardProduct={product} toggleDisplay={toggleDisplay} selectedProduct={selectedProduct}/>
    </div>
  )
}


export default Card;