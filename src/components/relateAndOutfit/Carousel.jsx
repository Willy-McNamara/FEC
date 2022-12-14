import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import List from './List.jsx'
import OutfitCard from './OutfitCard.jsx'
const Carousel = ({listOfProducts, mainProduct, pickProduct, choice, setProduct, selectedProduct={selectedProduct}}) => {

  const slideLeft = () => {
    let slider = document.getElementById('slider&noID');
    slider.scrollLeft = slider.scrollLeft - 500;
    var maxScrollRight = slider.scrollWidth - slider.clientWidth;
    const leftArrow = document.getElementById('leftSliderIcon&noID');
    const rightArrow = document.getElementById('rightSliderIcon&noID');
    if(slider.scrollLeft === maxScrollRight) {
      rightArrow.style.visibility = "hidden";
    } else if (slider.scrollLeft < maxScrollRight) {
      rightArrow.style.visibility = "visible";
    }
    if(slider.scrollLeft === 0) {
      leftArrow.style.visibility = "hidden";
    } else if (slider.scrollLeft > 0 ) {
      leftArrow.style.visibility = "visible";
    }
  }

  const slideRight = () => {
    let slider = document.getElementById('slider&noID');
    slider.scrollLeft = slider.scrollLeft + 500;
    var maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    var maxScrollRight = slider.scrollWidth - slider.clientWidth;
    const leftArrow = document.getElementById('leftSliderIcon&noID');
    const rightArrow = document.getElementById('rightSliderIcon&noID');
    if(slider.scrollLeft === maxScrollRight) {
      rightArrow.style.visibility = "hidden";
    } else if (slider.scrollLeft < maxScrollRight) {
      rightArrow.style.visibility = "visible";
    }
    if(slider.scrollLeft === 0) {
      leftArrow.style.visibility = "hidden";
    } else if (slider.scrollLeft > 0 ) {
      leftArrow.style.visibility = "visible";
    }
  }
  // const slideLeft = () => {
  //   let slider = document.getElementById('slider&noID');
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // }

  // const slideRight = () => {
  //   let slider = document.getElementById('slider&noID');
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // }

  return(
    <div className="main-slider-container" id="mainSliderContainer&noID">
      <MdChevronLeft className="slider-icon left" id="leftSliderIcon&noID" onClick={slideLeft}/>
      <div className="slider" id="slider&noID">
        <List listOfProducts={listOfProducts} mainProduct={mainProduct} pickProduct={pickProduct} choice={choice} selectedProduct={selectedProduct} setProduct={setProduct}/>
      </div>
      <MdChevronRight className="slider-icon right" id="rightSliderIcon&noID" onClick={slideRight}/>
    </div>
  )
}

export default Carousel;