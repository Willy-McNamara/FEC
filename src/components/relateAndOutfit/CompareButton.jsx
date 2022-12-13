import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CompareButton = ({toggleModal, toggleDisplay}) => {

  return(
    <FontAwesomeIcon icon={faStar} className="compare-button" id="compareButton&noID" onClick={(event) => {
      toggleModal(event);
    }}/>

  )
}

export default CompareButton;