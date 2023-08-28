import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ProductCard = ({ productInfo }) => {
  const { id, title, bgImage, heading } = productInfo;

  let baseUrl = new URL(window.location.href).origin;
  const productUrl = `${baseUrl}/product/${id}`;

  return (
    <div className="product-card-container">
      <div className="product-card-image-container">
        <img className="product-card-image" src={bgImage} alt={title} />
      </div>
      <div className="product-card-content-container">
        <div className="product-card-title"> {title} </div>
        <div className="product-card-heading">{heading} </div>
      </div>
      <Link to={productUrl}>
      <i className="fa-solid fa-right-long"></i>
      </Link>
    </div>
  );
};

export default ProductCard;
