import React from "react";
import "./style.css";

const FeatureCard = ({ data }) => {
  const { img, title } = data;

  let baseUrl = new URL(window.location.href).origin;

  const bgImageStyle = {
    backgroundImage: `url(${baseUrl}/${img})`,
  };
  return (
    <div className="feature-card-container">
      <img
        className="feature-card-image"
        src={`${baseUrl}/${img}`}
        alt="icon"
      />
      <div className="feature-card-desc">{title}</div>
    </div>
  );
};

export default FeatureCard;
