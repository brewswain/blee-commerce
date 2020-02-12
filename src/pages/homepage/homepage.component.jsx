import React from "react";

import CategoryList from "../../components/category-list/category-list.component";
import Banner from "../../components/banner/banner.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Banner />

    <CategoryList />
  </div>
);

export default HomePage;
