import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

import products from "../../../utils/products.json";
import FeatureCard from "../../../components/FeatureCard";
import logo from "../../assets/images/logoBeyondBank.png";
import { useWebInteraction } from "../../../context/WebInteractionContext";

const Product = () => {
  const { WebInteraction, updateWebInteraction } = useWebInteraction();

  let { productId } = useParams();
  const product = products.filter((ele) => ele.id.toString() === productId)[0];

  let bgImage = product?.bgImage;
  let title = product?.title;
  let heading = product?.heading;
  let features = product?.features;

  let baseUrl = new URL(window.location.href).origin;

  const bgImageStyle = {
    backgroundImage: `url(${baseUrl}/${bgImage})`,
  };

  useEffect(() => {
    updateWebInteraction((prevData) => {
      if (!Object.values(prevData).includes(title)) {
        // console.log("prevData=> ", prevData);
        let key = `menu${Object.keys(prevData).length+1}`;
        // console.log("key==> ", key, title);

        let newEntry = { [key]: title };
        // console.log("newEntry==> ", newEntry);

        return { ...prevData, ...newEntry };
      } else {
        // console.log("we were here");
        return prevData;
      }
    });
  }, [title, updateWebInteraction]);

  // return (
  //   <div className="product-container">
  //     <section className="product-background" style={bgImageStyle}></section>
  //     <div className="product-content">
  //       <h4 className="product-title">{title}</h4>
  //       <div className="product-heading">{heading} </div>
  //       <div className="product-features-container">
  //         {features.map((feature) => (
  //           <FeatureCard data={feature} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="main-container product-container">
      <section
        className="bg-container product-bg-container"
        style={bgImageStyle}
      ></section>
      <div className="content-container product-content">
        <img className="page-logo" src={logo} alt="logo" />
      </div>
      <section className="product-info">
        <h4 className="product-title">{title}</h4>
        <div className="product-heading">{heading} </div>
        <div className="product-features-container">
          {features.map((feature, index) => (
            <FeatureCard data={feature} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
