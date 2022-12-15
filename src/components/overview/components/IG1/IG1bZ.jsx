import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const IG1bZ = ({currentPhoto, zoom}) => {
  // THIS IS THE funky styled photo

  // state for styled comp
  let [opacity, setOpacity] = useState(0);
  let [offset, setOffset] = useState({left: -100, top: -100})
  let [zoomDim, setZoomDim] = useState({width: null, height: null})

  useEffect(() => {
    widthSetter()
  }, [currentPhoto, zoom])

  const widthSetter = () => {
    // grab the main photo element, take it's width
    setTimeout(() => {
      // use this to allow time for my container transition (let mainPhoto grow to max height!)
      let mainPhoto = document.getElementById('mainPhoto')
      let width = mainPhoto.offsetWidth
      let height = mainPhoto.offsetHeight
      setZoomDim({width: width * 2.5, height: height * 2.5})
    }, 500);
  }

  // HANDLERS

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e) => {
    let currContainer = document.getElementById('IG1b')
    let height = currContainer.offsetHeight;
    let width = currContainer.offsetWidth;

    let widthPercent = (e.nativeEvent.offsetX/width) * 100
    let heightPercent = (e.nativeEvent.offsetY/height) * 100

    let currentTenVW = document.body.offsetWidth / 11;
    let xRatio = zoomDim.width / currentTenVW;
    let yRatio = zoomDim.height / currentTenVW;
    setOffset({
      divLeft: widthPercent - 7.5,
      divTop: heightPercent - 16,
      imgLeft: -widthPercent * xRatio + 100,
      imgTop: -heightPercent * yRatio + 150,
    });
  }

  return (
    <div id="zoomContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} onClick={(e) => {
      let c = document.getElementById('Container1Ab')
      c.classList.toggle('hideContainer')
      let a = document.getElementById('Container1Aa')
      a.classList.toggle('expander')
      let z = document.getElementById('zoomContainer')
      z.classList.toggle('fancyZoom')
      let h = document.getElementById('IG1a')
      h.classList.toggle('hideContainer')
      let i = document.getElementById('iconGall')
      i.classList.toggle('revealContainer')
      widthSetter()
    }}>
        <MouseDiv id="mouseDiv" offset={offset} opacity={opacity} alt="mouseDiv">
          <ZoomedImage id="styledZoomImg" offset={offset} alt="target" src={`${currentPhoto.url}`} zoomDim={zoomDim}/>
        </MouseDiv>
    </div>
  )
}

// style component

const ZoomedImage = styled.img`
position: absolute;
src: ${(props) => props.source};
top: ${(props) => props.offset.imgTop}%;
left: ${(props) => props.offset.imgLeft}%;
justify-self: center;
align-self: center;
width: ${(props) => props.zoomDim.width}px;
`

const MouseDiv = styled.div`
top: ${(props) => props.offset.divTop}%;
left: ${(props) => props.offset.divLeft}%;
opacity: ${(props) => props.opacity};
position: absolute;
width: 10vw;
height: 10vw;
overflow: hidden;
`

export default IG1bZ;