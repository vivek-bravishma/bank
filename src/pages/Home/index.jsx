import React from "react";
// import homeBg from "../../assets/images/home.png";
// import "./style.css";
// import logo from "../../assets/images/logoBeyondBank.png";
import { Link } from "react-router-dom";
import Call from "../../components/Call";

const Home = () => {
  return (
    <>
      <Call />
      <div className="screen1-bg">
        <div className="contener clear">
          <img src="/assets/images/screen-1-text.png" alt="" className="img-responsive" />
          <Link to="/car-loan">
            <img
              src="/assets/images/screen-1-btn.png"
              className="img-responsive"
              alt=""
            />
          </Link>
        </div>
      </div>
      <nav></nav>
      <section></section>
    </>
  );
};

export default Home;
