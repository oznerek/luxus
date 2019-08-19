import React from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";

export default class MainNavigation extends React.Component {
  showMobileNav() {
    $(".mainList").toggleClass("showMenu");
  }

  render() {
    return (
      <div className="mainNavigation">
        <div className="mainNavLogo" />

        <ul className="mainList">
          <NavLink activeClassName="mainList__active" exact to="/">
            <li className="mainList-name">Gama modeli</li>
          </NavLink>
          <NavLink activeClassName="mainList__active" exact to="/offer">
            <li className="mainList-name">Oferty</li>
          </NavLink>
          <NavLink activeClassName="mainList__active" exact to="/discover">
            <li className="mainList-name">Odkryj Lexusa</li>
          </NavLink>
          <NavLink activeClassName="mainList__active" exact to="/usedCars">
            <li className="mainList-name">Uzywane</li>
          </NavLink>
          <NavLink activeClassName="mainList__active" exact to="/owership">
            <li className="mainList-name">Posiadanie Lexusa</li>
          </NavLink>
        </ul>

        <div className="mainNavUser">
          <div className="mainNavUser__icon">
            <i className="far fa-user" />
          </div>
          <div className="mainNavUser__icon">
            <i className="fas fa-search" />
          </div>
          <div className="mainNavUser__icon mainNavUser__icon-mobile ">
            <i
              id="phoneNav"
              className="fas fa-bars"
              onClick={this.showMobileNav}
            />
          </div>
        </div>
      </div>
    );
  }
}
