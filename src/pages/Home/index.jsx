import React from "react";
// import homeBg from "../../assets//assets/images/home.png";
// import "./style.css";
// import logo from "../../assets//assets/images/logoBeyondBank.png";
import { Link } from "react-router-dom";
import Call from "../../components/Call";

// const Home = () => {
//   return (
//     <>
//       <Call />
//       <div className="screen1-bg">
//         <div className="contener clear">
//           <img src="/assets//assets/images/screen-1-text.png" alt="" className="img-responsive" />
//           <Link to="/car-loan">
//             <img
//               src="/assets//assets/images/screen-1-btn.png"
//               className="img-responsive"
//               alt=""
//             />
//           </Link>
//         </div>
//       </div>
//       <nav></nav>
//       <section></section>
//     </>
//   );
// };

const Home = () => {
  return (
    <>
      <Call />
      <div className="screen1-bg">
        <div className="contener clear">
          <img
            src="/assets/images/screen-1-text.png"
            alt=""
            className="img-responsive lg-block"
          />
          <img
            src="/assets/images/screen-1-text-768.png"
            alt=""
            className="img-responsive sm-block"
          />
          <img
            src="/assets/images/screen-1-text-768.png"
            alt=""
            className="img-responsive xs-block"
          />
          <Link to="product.html">
            <img
              src="/assets/images/screen-1-btn.png"
              className="img-responsive lg-block"
              alt=""
            />
            <img
              src="/assets/images/screen-1-btn-768.png"
              className="img-responsive sm-block"
              alt=""
            />
            <img
              src="/assets/images/screen-1-btn-768.png"
              className="img-responsive xs-block"
              alt=""
            />
          </Link>
        </div>
      </div>
      <section className="gray-bg">
        <div className="contener center clear">
          <img
            src="/assets/images/home-c.jpg"
            alt=""
            className="img-responsive lg-block"
          />
          <img
            src="/assets/images/home-c-768.jpg"
            alt=""
            className="img-responsive sm-block w-100"
          />
          <img
            src="/assets/images/home-c-360.jpg"
            alt=""
            className="img-responsive xs-block w-100"
          />
        </div>
      </section>
      <nav></nav>
    </>
  );
};

export default Home;
