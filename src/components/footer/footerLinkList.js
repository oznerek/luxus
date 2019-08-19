import React from "react";
import $ from 'jquery';

const FooterList = () => {

let click = ()=> {
  // $(this).css('background-color', 'red')
  // $('.listFooter__list').css('display', 'block');
  
  $(".listFooter__header").click(function() {
    $(".listFooter__list").removeClass("showList");
    $(this)
      .closest(".listFooter__list")
      .addClass("showList");
  });
}

  return (
    <div className="footerList">
      <div className="footerList__container">
      <div className="discoverLexus">
        <div className="listFooter__header" onClick={click} > Odkryj lexusa <span className="listFooter__header-icon"><i className="fas fa-chevron-down"></i></span></div>
        <ul className="listFooter__list" id='discoverLexus'>
          <li className="listFooter__list-item"> Modele Lexus</li>
          <li className="listFooter__list-item"> Aktualnosci Lexusa</li>
          <li className="listFooter__list-item"> Osiagi</li>
          <li className="listFooter__list-item"> Wzornictwo</li>
          <li className="listFooter__list-item"> Technologia</li>
          <li className="listFooter__list-item"> Jakosc wykonania</li>
          <li className="listFooter__list-item"> Samochody koncepcyjne</li>
        </ul>
      </div>
      <div className="contactList">
        <div className="listFooter__header" data-toggle="collapse"
            href="contactList"> Badz w kontakcie z lexusem <span className="listFooter__header-icon"><i className="fas fa-chevron-down"></i></span></div>
        <ul className="listFooter__list" id="contactList">
          <li className="listFooter__list-item"> Zarezerwuj jazde testowa</li>
          <li className="listFooter__list-item"> Znajdz swojego dilera</li>
          <li className="listFooter__list-item"> Skonfiguruj samochod</li>
          <li className="listFooter__list-item"> Kontakt</li>
        </ul>
      </div>

      <div className="myLexus">
          <div className='listFooter__header' data-toggle="collapse"
            href="#myLexus"> Moj lexus <span className="listFooter__header-icon"><i className="fas fa-chevron-down"></i></span></div>
                <ul className="listFooter__list" id="myLexus">
                    <li className='listFooter__list-item'> Zaloguj sie</li>
                    <li className='listFooter__list-item'> Instrukcje obslugi</li>
                    <li className='listFooter__list-item'> Lexus Care</li>
                    <li className='listFooter__list-item'> Akcesoria Lexus</li>
                </ul>
           </div>

      </div>

      <div className="socialMedia">
          <div className="socialMedia-icon"><i className="fab fa-facebook-f"></i></div>
          <div className="socialMedia-icon"><i className="fab fa-twitter"></i></div>
          <div className="socialMedia-icon"><i className="fab fa-youtube"></i></div>
          </div>
    </div>
  );
};
export default FooterList;
