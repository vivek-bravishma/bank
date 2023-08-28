import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.css";
import { UserContext } from "../../context/UserContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Call from "../Call";
// import { useAuth } from "../../hooks/useAuth";
const logo = require("../../assets/images/whiteLogoBeyondBank.png");

const Navbar = () => {
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const { user, setUser } = useContext(UserContext);
  const { login, logout } = useContext(UserContext);
  const { getItem } = useLocalStorage();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      login(JSON.parse(user));
    }
  }, [login, logout]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    setUser(null);
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      { user && <Call />} 

      <div className="nav-container">
        <div className="logo nav-logo">
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
              <NavLink to="/" onClick={handleShowNavbar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={handleShowNavbar}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleShowNavbar}>
                Services
              </NavLink>
            </li>
            <li className="nav-user-lmnt">
              {/* <NavLink to="/login" onClick={handleShowNavbar}>
                Login
                <i className="fa fa-user" aria-hidden="true"></i>
              </NavLink> */}
              {/* {console.log("user==================== ", user)} */}
              {user ? (
                <>
                  <div className="dropdown" onClick={toggleDropdown}>
                    {user?.name}
                    <i className="fa fa-user" aria-hidden="true"></i>

                    {isDropdownOpen && (
                      <div
                        className="dropdown-menu"
                        // onClick={() => setUser(null)}
                        onClick={handleLogout}
                      >
                        <div className="logout-btn dropdown-item">Logout</div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <NavLink to="/login" onClick={handleShowNavbar}>
                  Login
                  <i className="fa fa-user" aria-hidden="true"></i>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="nav-mob-user-elm">
          {user ? (
            <>
              <div className="dropdown" onClick={toggleDropdown}>
                {user?.name}
                <i className="fa fa-user" aria-hidden="true"></i>

                {isDropdownOpen && (
                  <div
                    className="dropdown-menu"
                    // onClick={() => setUser(null)}
                    onClick={handleLogout}
                  >
                    <div className="logout-btn dropdown-item">Logout</div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <NavLink
              to="/login"
              className="nav-login-btn"
              // onClick={handleShowNavbar}
            >
              Login
              <i className="fa fa-user" aria-hidden="true"></i>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="25"
    viewBox="0 0 52 25"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="32"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#fff"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="32"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#fff"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="32"
        height="4"
        rx="2"
        transform="translate(304 57)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default Navbar;
