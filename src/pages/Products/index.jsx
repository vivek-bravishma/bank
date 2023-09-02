import React from "react";

import products from "../../utils/products.json";
import ProductCard from "../../components/ProductCard";
import "./style.css";
import LoanCalc from "../../components/LoanCalc";

const Products = () => {
  return (
    <div className="main-container products-container">
      {/* <section
        className="bg-container products-bg-container"
        style={{ backgroundImage: `url(${homeBg})` }}
      ></section> */}

      <div className="content-container products-content-container">
        <div className="products-heading-container">
          <p>What We’re Offering</p>
          <h2>All Loans Services</h2>
        </div>
        <div className="products-card-container">
          {products.map((product) => (
            <ProductCard productInfo={product} key={product.id} />
          ))}
        </div>
      </div>
      <LoanCalc />
    </div>
  );
};

export default Products;
