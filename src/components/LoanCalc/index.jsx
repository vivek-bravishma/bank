import React from "react";

const LoanCalc = () => {
  let baseUrl = new URL(window.location.href).origin;

  return (
    <section className="clear">
      <div className="contener clear mt25">
        <div className="d-flex">
          <div className="width50 left">
            <img
              src={`${baseUrl}/assets/images/pro-details.png`}
              alt=""
              className="img-responsive w-100 lg-block"
            />
            <img
              src={`${baseUrl}/assets/images/pro-details.png`}
              alt=""
              className="img-responsive w-100 sm-block"
            />
            <img
              src={`${baseUrl}/assets/images/pro-details-xs.png`}
              alt=""
              className="img-responsive w-100 xs-block"
            />
          </div>
          <div className="width50 right">
            <img
              src={`${baseUrl}/assets/images/cal-box.png`}
              alt=""
              className="img-responsive w-100 lg-block"
            />
            <img
              src={`${baseUrl}/assets/images/cal-box.png`}
              alt=""
              className="img-responsive w-100 sm-block"
            />
            <img
              src={`${baseUrl}/assets/images/cal-box-xs.png`}
              alt=""
              className="img-responsive w-100 xs-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalc;
