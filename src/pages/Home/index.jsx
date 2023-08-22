import React from "react";
import homeBg from "../../assets/images/home.png";
import "./style.css";
import logo from "../../assets/images/logoBeyondBank.png";
import { Link } from "react-router-dom";

const Home = () => {
  console.log('homegb==> ',homeBg,typeof homeBg)
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <img src={logo} alt="logo" />

      <h1 className="home-heading">
        Customer Service <br />
        that is beyong good
      </h1>
      <p className="sub-heading">
        We provide you with exceptional banking solutions
      </p>

      <Link to="/products" className="see-prod-link">SEE PRODUCTS</Link>
    </div>
  );
};

export default Home;
