import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OutfitCard = ({addItem}) => {
  return (
  <div className="card outfit-button" onClick={addItem}>
    <FontAwesomeIcon icon={faPlus} className="plus-icon"/>
    <h2>Add Outfit</h2>
  </div>
  )
}

export default OutfitCard;