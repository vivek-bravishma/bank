import React from "react";
import homeBg from "../../assets/images/home.png";
import "./style.css";
import logo from "../../assets/images/logoBeyondBank.png";
import { Link } from "react-router-dom";
// import Call from "../../components/Call";

const Home = () => {
  // console.log("homegb==> ", homeBg, typeof homeBg);
  return (
    // <div className="home-container">
    <div className="main-container home-container">
      {/* <Call /> */}

      <section
        className="bg-container home-bg-container"
        style={{ backgroundImage: `url(${homeBg})` }}
      ></section>
      <div className="content-container home-content-container">
        <img className="page-logo" src={logo} alt="logo" />
        <div className="sub-content-container home-sub-content-container">
          <h1 className="home-heading">
            Customer Service
            <br /> that is beyond good
          </h1>
          <p className="home-sub-heading">
            We provide you with exceptional banking solutions
          </p>

          <Link to="/product/1" className="see-prod-link">
            SEE PRODUCTS
          </Link>
        </div>
      </div>
      {/* <section className="feature-one">
        <img
          src="assets/images/shapes/feature-shape-1-1.png"
          alt=""
          className="feature-one__shape-1"
        />
        <img
          src="assets/images/shapes/feature-shape-1-2.png"
          alt=""
          className="feature-one__shape-2"
        />
        <img
          src="assets/images/shapes/feature-shape-1-3.png"
          alt=""
          className="feature-one__shape-3"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="block-title text-left">
                <p>Get to Know About</p>
                <h2>Flexible and Quick Loans</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="block-text">
                Flexible and quick loans can be an excellent option for
                individuals that need access to funds quickly and with minimal
                hassle. However, it's essential to research and compare
                different loan options to find the best fit for your specific
                needs and financial situation.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-one__box">
                <img
                  src="assets/icons/rates.png"
                  alt=""
                  className=" feature-icons-img"
                />
                <p>Very Low Rates on All Loans</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-one__box">
                <img
                  src="assets/icons/guarantee.png"
                  alt=""
                  className=" feature-icons-img"
                />
                <p>99.9% Success Rate Guarantee</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-one__box">
                <img
                  src="assets/icons/repayment.png"
                  alt=""
                  className=" feature-icons-img"
                />
                <p>Flexible with Your Repayments</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="home-feature-container">
        <div className="home-feature-content-container">
          <div className="home-feature-row">
            <div className="home-feature-heading-cont">
              <div className="block-title text-left">
                <p>Get to Know About</p>
                <h2>Flexible and Quick Loans</h2>
              </div>
            </div>
            <div className="home-feature-desc-cont">
              <p className="block-text">
                Flexible and quick loans can be an excellent option for
                individuals that need access to funds quickly and with minimal
                hassle. However, it's essential to research and compare
                different loan options to find the best fit for your specific
                needs and financial situation.
              </p>
            </div>
          </div>
          <div className="home-feature-card-row">
            <div className="home-feature-card">
              <img
                src="assets/icons/rates.png"
                alt=""
                className=" feature-icons-img"
              />
              <p>Very Low Rates on All Loans</p>
            </div>
            <div className="home-feature-card">
              <img
                src="assets/icons/guarantee.png"
                alt=""
                className=" feature-icons-img"
              />
              <p>99.9% Success Rate Guarantee</p>
            </div>
            <div className="home-feature-card">
              <img
                src="assets/icons/repayment.png"
                alt=""
                className=" feature-icons-img"
              />
              <p>Flexible with Your Repayments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
