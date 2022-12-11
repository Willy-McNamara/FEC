import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import List from './List.jsx'
const Carousel = ({listOfProducts}) => {
  const slideLeft = () => {
    let slider = document.getElementById('slider&noID');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    let slider = document.getElementById('slider&noID');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return(
    <div className="main-slider-container" id="mainSliderContainer&noID">
      <MdChevronLeft className="slider-icon left" id="leftSliderIcon&noID" onClick={slideLeft}/>
      <div className="slider" id="slider&noID">
        <List listOfProducts={listOfProducts}/>
      </div>
      <MdChevronRight className="slider-icon right" id="rightSliderIcon&noID" onClick={slideRight}/>
    </div>
  )
}

export default Carousel;