import React from "react";

import Header from "../../components/header/header.component";
import CategoryList from "../../components/category-list/category-list.component";
import Banner from "../../components/banner/banner.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="header-container">
    <Header />

    <div className="homepage">
      <Banner />

      <CategoryList />
    </div>
  </div>
);

export default HomePage;
