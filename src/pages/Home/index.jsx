import React from "react";
import homeBg from "../../assets/images/home.png";
import "./style.css";
import logo from "../../assets/images/logoBeyondBank.png";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("homegb==> ", homeBg, typeof homeBg);
  return (
    // <div className="home-container">
    <div className="main-container home-container">
      <section
        className="bg-container home-bg-container"
        style={{ backgroundImage: `url(${homeBg})` }}
      ></section>
      <div className="content-container home-content-container">
        <img src={logo} alt="logo" />
        <h1 className="home-heading">
          Customer Service <br />
          that is beyong good
        </h1>
        <p className="sub-heading">
          We provide you with exceptional banking solutions
        </p>

        <Link to="/product/1" className="see-prod-link">
          SEE PRODUCTS
        </Link>
      </div>
    </div>
  );
};

export default Home;
