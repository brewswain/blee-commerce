import React from "react";

import { ReactComponent as BannerSVG } from "../../assets/blee_commerce.svg";

import "./banner.styles.scss";

const Banner = () => (
  <div className="banner-container">
    <a
      href="https://github.com/brewswain/blee-commerce"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BannerSVG className="banner-svg" />
    </a>
  </div>
);

export default Banner;
