import React from 'react'
import List from './List.jsx';
import ReactDom from 'react-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const ReactCardSlider = ({relatedProducts, icon}) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return(
    <div className="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
      <div id="slider">
        <List relatedProducts={relatedProducts} icon={icon}/>
      </div>
      <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
    </div>
  )
}

export default ReactCardSlider;