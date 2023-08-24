import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";
const logo = require("../../assets/images/whiteLogoBeyondBank.png");

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">
            <img className="logo-img" src={logo} alt="beyond bank logo" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleShowNavbar}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={handleShowNavbar}>Products</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleShowNavbar}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={handleShowNavbar}>
                user
                <i className="fa fa-user" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#fff"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#fff"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default Navbar;
