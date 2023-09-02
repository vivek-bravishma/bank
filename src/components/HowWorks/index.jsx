import React from "react";
import "./style.css";

const HowWorks = () => {
  let baseUrl = new URL(window.location.href).origin;

  return (
    // <section className="how-works">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-5">
    //         <img
    //           src={`${baseUrl}/assets/images/how-works.jpg`}
    //           className="how-works__image"
    //           alt=""
    //         />
    //       </div>
    //       <div className="col-lg-7">
    //         <div
    //           className="how-works__content wow fadeInRight"
    //           data-wow-duration="1500ms"
    //         >
    //           <div className="block-title text-left">
    //             <p>How Process Works</p>
    //             <h2>A Quick Payment Transparent Process</h2>
    //           </div>
    //           <p className="block-text">
    //             There are many variations of pass of lorem ipsum but the
    //             majority have suffered alteration in some form. Injected humour
    //             randomised words which.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <section className="gray-bg ptp-20">
        {/* <section className="gray-bg mt25 ptp-20"> */}
        <div className="contener clear">
          <div className="d-flex">
            <div className="width25 center">
              <img
                src={`${baseUrl}/assets/images/box-1.png`}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="width25 center">
              <img
                src={`${baseUrl}/assets/images/box-2.png`}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="width25 center">
              <img
                src={`${baseUrl}/assets/images/box-3.png`}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="width25 center">
              <img
                src={`${baseUrl}/assets/images/box-4.png`}
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg">
        <div className="contener clear">
          <div className="center mt25">
            <img
              alt=""
              src={`${baseUrl}/assets/images/car-loan-d.png`}
              className="img-responsive lg-block"
            />
            <img
              alt=""
              src={`${baseUrl}/assets/images/car-loan-d-900.png`}
              className="img-responsive sm-block"
            />
            <img
              alt=""
              src={`${baseUrl}/assets/images/car-loan-d-600.png`}
              className="img-responsive xs-block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWorks;
