// import React from "react";
// import Call from "../../../components/Call";
// const Personal = () => {
//   return (
//     <>
//       <Call />
//       <div className="img-banner">
//         <img src="/assets/images/img-3.png" alt="" className="img-responsive" />
//       </div>
//       <section>
//         <div className="contener clear mt25">
//           <div className="center">
//             <img
//               src="/assets/images/peronal-loan-t.png"
//               className="img-responsive"
//               alt=""
//             />
//           </div>
//           <div className="product">
//             <div className="width33 right">
//               <img src="/assets/images/1.png" alt="" className="img-responsive" />
//             </div>
//             <div className="width33 center">
//               <img src="/assets/images/2.png" alt="" className="img-responsive" />
//             </div>
//             <div className="width33 left">
//               <img src="/assets/images/3.png" alt="" className="img-responsive" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <nav></nav>
//     </>
//   );
// };

// export default Personal;

import React from "react";
import Call from "../../../components/Call";
const Personal = () => {
  return (
    <>
      <Call />

      <div className="img-banner">
        <img
          src="/assets/images/img-3.png"
          alt=""
          className="img-responsive w-100-lg"
        />
      </div>

      <section className="">
        <div className="contener clear">
          <div className="center">
            <img
              alt=""
              src="/assets/images/personal-loan-title.png"
              className="img-responsive lg-block"
            />
            <img
              alt=""
              src="/assets/images/personal-loan-title-900.png"
              className="img-responsive sm-block"
            />
            <img
              alt=""
              src="/assets/images/personal-loan-title-600.png"
              className="img-responsive xs-block max-width"
            />
          </div>
          <div className="center">
            <img
              alt=""
              src="/assets/images/personal-loan-text.png"
              className="img-responsive lg-block mt-33"
            />
            <img
              alt=""
              src="/assets/images/personal-loan-text-900.png"
              className="img-responsive sm-block mt-33"
            />
            <img
              alt=""
              src="/assets/images/personal-loan-text-600.png"
              className="img-responsive xs-block ssm-none max-width mt-33"
            />
            <img
              alt=""
              src="/assets/images/personal-loan-text-564.png"
              className="img-responsive xxs-block max-width mt-33"
            />
          </div>

          <div className="d-flex">
            <div className="width33 center">
              <img
                src="/assets/images/1.png"
                alt=""
                className="img-responsive xs-max-width"
              />
            </div>
            <div className="width33 center">
              <img
                src="/assets/images/2.png"
                alt=""
                className="img-responsive xs-max-width"
              />
            </div>
            <div className="width33 center">
              <img
                src="/assets/images/3.png"
                alt=""
                className="img-responsive xs-max-width"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="gray-bg mt25 ptp-20">
        <div className="contener clear">
          <div className="d-flex">
            <div className="width25 center">
              <img
                src="/assets/images/box-1.png"
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="width25 center">
              <img
                src="/assets/images/box-2.png"
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="width25 center">
              <img
                src="/assets/images/box-3.png"
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="width25 center">
              <img
                src="/assets/images/box-4.png"
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="contener clear">
          <div className="center mt25">
            <img
              alt=""
              src="/assets/images/car-loan-d.png"
              className="img-responsive lg-block"
            />
            <img
              alt=""
              src="/assets/images/car-loan-d-900.png"
              className="img-responsive sm-block"
            />
            <img
              alt=""
              src="/assets/images/car-loan-d-600.png"
              className="img-responsive xs-block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Personal;
