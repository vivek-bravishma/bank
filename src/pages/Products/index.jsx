import React from "react";

import products from "../../utils/products.json";
import ProductCard from "../../components/ProductCard";
import "./style.css";

const Products = () => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard productInfo={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
