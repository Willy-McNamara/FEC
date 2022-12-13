import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
  return (
      <div id="Banner">
        <div id="main">
          <img id="logo" src="Logo.png" alt="Logo"/>
          <div id="searchBar"> SEARCH BAR </div>
        </div>
        <div id="announcementBar">
          SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE / DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
        </div>
      </div>
  )
}

export default Banner;
