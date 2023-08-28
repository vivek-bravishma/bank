// import React from "react";
// import { Link } from "react-router-dom";

// // import products from "../../utils/products.json";
// // import ProductCard from "../../components/ProductCard";
// // import "./style.css";
// import Call from "../../components/Call";

// const Product = () => {
//   return (
//     <>
//       <Call />
//       <section>
//         <div className="contener clear">
//           <div className="center">
//             <img
//               src="/assets/images/our-product.png"
//               className="img-responsive"
//               alt=""
//             />
//           </div>
//           <div className="product">
//             <div className="width33 right">
//               <Link to="/car-loan">
//                 <img
//                   src="/assets/images/car-lone.png"
//                   alt=""
//                   className="img-responsive"
//                 />
//               </Link>
//             </div>
//             <div className="width33 center">
//               <Link to="/home-loan">
//                 <img
//                   src="/assets/images/home-lone.png"
//                   alt=""
//                   className="img-responsive"
//                 />
//               </Link>
//             </div>
//             <div className="width33 left">
//               <Link to="/personal-loan">
//                 <img
//                   src="/assets/images/peronal-lone.png"
//                   alt=""
//                   className="img-responsive"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <nav></nav>
//     </>
//   );
// };

// export default Product;

import React from "react";
import { Link } from "react-router-dom";

// import products from "../../utils/products.json";
// import ProductCard from "../../components/ProductCard";
// import "./style.css";
import Call from "../../components/Call";

const Product = () => {
  return (
    <>
      <Call />

      <section className="pro-bg">
        <div className="contener clear">
          <div className="center">
            <img alt=""
              src="/assets/images/our-product-title.png"
              className="img-responsive lg-block"
            />
            <img alt=""
              src="/assets/images/our-product-title-900.png"
              className="img-responsive sm-block"
            />
            <img alt=""
              src="/assets/images/our-product-title-600.png"
              className="img-responsive xs-block max-width"
            />
          </div>
          <div className="d-flex">
            <div className="width50 right">
              <Link to="/car-loan">
                <img
                  src="/assets/images/car-loan-box.png"
                  alt=""
                  className="img-responsive w-100"
                />
              </Link>
            </div>
            <div className="width50 left">
              <Link to="/personal-loan">
                <img
                  src="/assets/images/personal-loan-box.png"
                  alt=""
                  className="img-responsive w-100"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="clear">
        <div className="contener clear mt25">
          <div className="d-flex">
            <div className="width50 left">
              <img
                src="/assets/images/pro-details.png"
                alt=""
                className="img-responsive w-100 lg-block"
              />
              <img
                src="/assets/images/pro-details.png"
                alt=""
                className="img-responsive w-100 sm-block"
              />
              <img
                src="/assets/images/pro-details-xs.png"
                alt=""
                className="img-responsive w-100 xs-block"
              />
            </div>
            <div className="width50 right">
              <img
                src="/assets/images/cal-box.png"
                alt=""
                className="img-responsive w-100 lg-block"
              />
              <img
                src="/assets/images/cal-box.png"
                alt=""
                className="img-responsive w-100 sm-block"
              />
              <img
                src="/assets/images/cal-box-xs.png"
                alt=""
                className="img-responsive w-100 xs-block"
              />
            </div>
          </div>
        </div>
      </section>

      <nav></nav>
    </>
  );
};

export default Product;
