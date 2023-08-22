import React from "react";
import "./style.css";

const ProductCard = ({ productInfo }) => {
  const { title, bgImage, heading, features } = productInfo;

  return (
    <div className="product-card-container">
      <div className="product-title"> {title} </div>
      <img className="product-bg" src={bgImage} alt={title} />
      <div className="product-heading">{heading} </div>
    </div>
  );
};

export default ProductCard;
