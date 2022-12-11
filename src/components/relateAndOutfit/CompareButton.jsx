import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CompareButton = ({toggleModal}) => {

  return(
    <FontAwesomeIcon icon={faStar} className="compare-button" id="compareButton&noID" onClick={(event) => {
      toggleModal();
    }}/>

  )
}

export default CompareButton;