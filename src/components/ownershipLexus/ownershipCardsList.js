import React from "react";
import OwnershipCard from './ownershipCard';
import cardsData from './cardsData';

const OwnershipCardsList = () => {
  let renderCard = (cardsData.cardsData.map(element=> {
    return(<OwnershipCard cardData={element} key={element.header}/>)
  }))
  return (
    <div className="cardsContainer">
        {renderCard} 
    </div>
  );
};

export default OwnershipCardsList;