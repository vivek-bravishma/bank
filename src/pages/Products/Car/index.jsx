import React from "react";
import Call from "../../../components/Call";

const Car = () => {
  return (
    <>
      <Call />
      <div className="img-banner">
        <img src="/assets/images/img-1.png" alt="" className="img-responsive" />
      </div>
      <section>
        <div className="contener clear mt25">
          <div className="center">
            <img
              src="/assets/images/car-loan-t.png"
              className="img-responsive"
              alt=""
            />
          </div>
          <div className="product">
            <div className="width33 right">
              <img src="/assets/images/1.png" alt="" className="img-responsive" />
            </div>
            <div className="width33 center">
              <img src="/assets/images/2.png" alt="" className="img-responsive" />
            </div>
            <div className="width33 left">
              <img src="/assets/images/3.png" alt="" className="img-responsive" />
            </div>
          </div>
        </div>
      </section>

      <nav></nav>
    </>
  );
};

export default Car;
