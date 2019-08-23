import React from "react";

class OwnershipLexus extends React.Component {
  render() {
    let item = this.props.cardData;
    let renderCardList = item.cardList.map(el => {
      return (<li className='cardList__item'>{el}<span class="testDrive__icon"></span></li>)
    })
  return (
    <div className="lexusCard">
      <div className="cardText">
        <h2> {item.header}</h2>
        <p>
          {item.description1}
        </p>
        <p>{item.description2}</p>
        <ul className="cardList">
          {renderCardList}
      </ul >
      </div>
      <img className="cardPicture" src={item.picture} alt ='cardName' />
      
    </div>
  );
  };
};

export default OwnershipLexus;
