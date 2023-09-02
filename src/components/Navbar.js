import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
import IconLogoWhite from "../assets/icone_logo_white.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const isDesktop = window.innerWidth > 850;
    return (
      <nav className="NavbarItems">
        <div className="logo-container">
          <img
            src={IconLogoWhite}
            alt="logo-white"
            className="navbar-logo-img"
            loading="lazy"
          />
          <div className="title-container">
            <h1 className="navbar-logo">Vida Nova</h1>
            <p>CHURCH</p>
          </div>
        </div>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.url}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? isDesktop
                        ? "active"
                        : "nav-links"
                      : "nav-links"
                  }
                >
                  <i className={item.icon}></i>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
