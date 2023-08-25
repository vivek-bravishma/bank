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
      <section>
        <div className="contener clear">
          <div className="center">
            <img
              src="/assets/images/our-product.png"
              className="img-responsive"
              alt=""
            />
          </div>
          <div className="product">
            <div className="width33 right">
              <Link to="/car-loan">
                <img
                  src="/assets/images/car-lone.png"
                  alt=""
                  className="img-responsive"
                />
              </Link>
            </div>
            <div className="width33 center">
              <Link to="/home-loan">
                <img
                  src="/assets/images/home-lone.png"
                  alt=""
                  className="img-responsive"
                />
              </Link>
            </div>
            <div className="width33 left">
              <Link to="/personal-loan">
                <img
                  src="/assets/images/peronal-lone.png"
                  alt=""
                  className="img-responsive"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <nav></nav>
    </>
  );
};

export default Product;
