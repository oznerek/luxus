import React from "react";
import $ from "jquery";

class FooterList extends React.Component {
  componentDidMount() {
    $(".listFooter__header").click(function() {
      if (window.innerWidth < 760) {
        $(this)
          .next()
          .toggle(500); // toggle collapse
      } else {
        $(".listFooter__list").css("display", "block");
      }
    });
  }

  render() {
    return (
      <div className="footerList">
        <div className="footerList__container">
          <div className="discoverLexus">
            <div className="listFooter__header">
              {" "}
              Odkryj lexusa{" "}
              <span className="listFooter__header-icon">
                <i className="fas fa-chevron-down" />
              </span>
            </div>
            <ul className="listFooter__list" id="discoverLexus">
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
            <div
              className="listFooter__header"
              data-toggle="collapse"
              href="contactList"
            >
              {" "}
              Badz w kontakcie z lexusem{" "}
              <span className="listFooter__header-icon">
                <i className="fas fa-chevron-down" />
              </span>
            </div>
            <ul className="listFooter__list" id="contactList">
              <li className="listFooter__list-item">
                {" "}
                Zarezerwuj jazde testowa
              </li>
              <li className="listFooter__list-item"> Znajdz swojego dilera</li>
              <li className="listFooter__list-item"> Skonfiguruj samochod</li>
              <li className="listFooter__list-item"> Kontakt</li>
            </ul>
          </div>

          <div className="myLexus">
            <div
              className="listFooter__header"
              data-toggle="collapse"
              href="#myLexus"
            >
              {" "}
              Moj lexus{" "}
              <span className="listFooter__header-icon">
                <i className="fas fa-chevron-down" />
              </span>
            </div>
            <ul className="listFooter__list" id="myLexus">
              <li className="listFooter__list-item"> Zaloguj sie</li>
              <li className="listFooter__list-item"> Instrukcje obslugi</li>
              <li className="listFooter__list-item"> Lexus Care</li>
              <li className="listFooter__list-item"> Akcesoria Lexus</li>
            </ul>
          </div>
        </div>

        <div className="socialMedia">
          <div className="socialMedia-icon">
            <i className="fab fa-facebook-f" />
          </div>
          <div className="socialMedia-icon">
            <i className="fab fa-twitter" />
          </div>
          <div className="socialMedia-icon">
            <i className="fab fa-youtube" />
          </div>
        </div>
      </div>
    );
  }
}
export default FooterList;
