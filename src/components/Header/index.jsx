import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="contener clear">
        <div className="float-left">
          <NavLink to="/">
            <img src="/assets/images/logo.png" className="logo-img" alt="" />
          </NavLink>
        </div>
        <div className="float-right menu">
          <NavLink to="/">
            <img src="/assets/images/home.png" alt="" />
          </NavLink>

          <NavLink to="/products">
            <img src="/assets/images/product.png" alt="" />
          </NavLink>
          <NavLink>
            <img src="/assets/images/service.png" alt="" />
          </NavLink>
          <NavLink>
            {/* <NavLink to='/login'> */}
            <img src="/assets/images/user.png" alt="" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
