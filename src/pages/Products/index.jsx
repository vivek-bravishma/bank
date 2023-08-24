import React from "react";

import products from "../../utils/products.json";
import ProductCard from "../../components/ProductCard";
import "./style.css";

const Products = () => {
  return (
    <div className="main-container products-container">
      {/* <section
        className="bg-container products-bg-container"
        style={{ backgroundImage: `url(${homeBg})` }}
      ></section> */}

      <div className="content-container products-content-container">
        <div className="products-heading-container">
          <div className="products-heading">OUR PRODUCTS</div>
        </div>
        <div className="products-card-container">
          {products.map((product) => (
            <ProductCard productInfo={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
