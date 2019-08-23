import React from "react";

export default class BlackNavigation extends React.Component {
  render() {
    return (
      <nav className="blackNavigation">
        <ul className="blackList">
          <li className="blackList-item">
            <div className="blackList-icon">
              <i className="fas fa-car " />
            </div>
            <div className="blackList-text">Skonfiguruj swój samochód</div>
          </li>
          <li className="blackList-item">
            <div className="blackList-icon">
              <i className="fas fa-list-ul" />
            </div>
            <div className="blackList-text">Szybki dostep</div>
          </li>
          <li className="blackList-item">
            <div className='blackList-icon'>            <i className="fas fa-map-marked-alt" />
</div>
            <div className="blackList-text">
            Mój diler lexusa</div>
          </li>
          <li className="blackList-item">
          <div className="blackList-icon">
          <i className="fas fa-car" />
            </div>
            <div className="blackList-text">
            Moje porównania samochodów</div>
          </li>
          <li className="blackList-item">
          <div className="blackList-icon">
          <i className="far fa-envelope" />
            </div>
            <div className="blackList-text">
            Kontakt </div>
          </li>
          <li className="blackList-item">
          <div className="blackList-icon">
          <i className="far fa-credit-card" />
            </div>
            <div className="blackList-text">
            Finansowanie</div>
          </li>
        </ul>
      </nav>
    );
  }
}
