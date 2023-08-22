import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

import products from "../../utils/products.json";
import FeatureCard from "../../components/FeatureCard";

const Product = () => {
  let { productId } = useParams();
  const product = products.filter((ele) => ele.id == productId)[0];

  let bgImage = product?.bgImage;
  let title = product?.title;
  let heading = product?.heading;
  let features = product?.features;

  let baseUrl = new URL(window.location.href).origin;

  const bgImageStyle = {
    backgroundImage: `url(${baseUrl}/${bgImage})`,
  };
  return (
    <div className="product-container" style={bgImageStyle}>
      <h4 className="product-title">{title}</h4>
      <div className="product-heading">{heading} </div>
      <div className="product-features-container">
        {features.map((feature) => (
          <FeatureCard data={feature} />
        ))}
      </div>
    </div>
  );
};

export default Product;
