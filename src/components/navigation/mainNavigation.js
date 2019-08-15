import React from "react";
import $ from "jquery";

export default class MainNavigation extends React.Component {
  showMobileNav() {
         $(".mainList").toggleClass("showMenu");   
  }

  render() {
    return (
      <div className="mainNavigation">
        <div className="mainNavLogo" />

        <ul className="mainList">
          <li className="mainList-name mainList__active">Gama modeli</li>
          <li className="mainList-name">Oferty</li>
          <li className="mainList-name">Odkryj Lexusa</li>
          <li className="mainList-name">Uzywane</li>
          <li className="mainList-name">Posiadanie Lexusa</li>
        </ul>

        <div className="mainNavUser">
          <div className="mainNavUser__icon">
            <i className="far fa-user" />
          </div>
          <div className="mainNavUser__icon">
            <i className="fas fa-search" />
          </div>
          <div className="mainNavUser__icon mainNavUser__icon-mobile ">
            <i id="phoneNav" className ="fas fa-bars" onClick={this.showMobileNav} />
          </div>
        </div>
      </div>
    );
  }
}
