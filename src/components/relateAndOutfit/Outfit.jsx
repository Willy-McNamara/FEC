import React, { useEffect, useState }from 'react';
import OutfitCarousel from './OutfitCarousel.jsx';
import axios from 'axios';

const Outfit = ({mainProduct, choice, selectedProduct, pickProduct}) => {
  const [outfitList, setOutfitList] = useState([]);

  let localOutfitList = localStorage.getItem('outfitList');

  const addItem = () => {

    let outfitListCopy = [...outfitList];

    let name = selectedProduct.name;

    let existingItem = outfitListCopy.find(listItem => listItem.name == name);

    if (existingItem) {

    } else {
      outfitListCopy.push(selectedProduct);
    }

    setOutfitList(outfitListCopy);

    let stringOutfitList = JSON.stringify(outfitListCopy);
    localStorage.setItem('outfitList', stringOutfitList);

  }

  const removeItem = (itemName) => {
    let outfitListCopy = [...outfitList];

    outfitListCopy = outfitListCopy.filter(item => item.name != itemName);
    setOutfitList(outfitListCopy);
    let outfitListString = JSON.stringify(outfitListCopy);
    localStorage.setItem('outfitList', outfitListString);
  }
  useEffect(() => {
    //turn it into js
    localOutfitList = JSON.parse(localOutfitList);
    //load persisted cart into state if it exists
    if (localOutfitList) setOutfitList(localOutfitList)

  }, [])
  return(
    <div className="related-container outfit-container" id="relatedContainer&noID">
      <h2 className="related-header outfit-header" id="relatedHeader&noID">Outfit</h2>
      {/* Carousel takes main product */}
      <OutfitCarousel listOfProducts={outfitList} mainProduct={mainProduct} choice={choice} addItem={addItem} removeItem={removeItem} pickProduct={pickProduct}/>
    </div>
  )
}

export default Outfit;