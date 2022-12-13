import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import List from './List.jsx'
import OutfitCard from './OutfitCard.jsx'
import { useState } from 'react'
const OutfitCarousel = ({listOfProducts, mainProduct, addItem, selectedProduct, removeItem, pickProduct}) => {

  const slideLeft = () => {
    let slider = document.getElementById('outfitSlider&noID');
    slider.scrollLeft = slider.scrollLeft - 500;
    var maxScrollRight = slider.scrollWidth - slider.clientWidth;
    const leftArrow = document.getElementById('outfitLeftSliderIcon&noID');
    const rightArrow = document.getElementById('outfitRightSliderIcon&noID');
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
    let slider = document.getElementById('outfitSlider&noID');
    slider.scrollLeft = slider.scrollLeft + 500;
    var maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    var maxScrollRight = slider.scrollWidth - slider.clientWidth;
    const leftArrow = document.getElementById('outfitLeftSliderIcon&noID');
    const rightArrow = document.getElementById('outfitRightSliderIcon&noID');
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
  return(
    <div className="main-slider-container" id="mainSliderContainer&noID">
      <MdChevronLeft className="slider-icon left" id="outfitLeftSliderIcon&noID" onClick={slideLeft}/>
      {/* <OutfitCard addItem={addItem}/> */}
      <div className="slider" id="outfitSlider&noID">
        <OutfitCard addItem={addItem}/>
        <List listOfProducts={listOfProducts} mainProduct={mainProduct} removeItem={removeItem} pickProduct={pickProduct}/>
      </div>
      <MdChevronRight className="slider-icon right" id="outfitRightSliderIcon&noID" onClick={slideRight}/>
    </div>
  )
}

export default OutfitCarousel;