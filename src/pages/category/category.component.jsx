import React from "react";

// import ShopItem from "../../components/shop-item/shop-item.component";

import "./category.styles.scss";

const CategoryPage = ({ match }) => {
  console.log(match);

  return (
    <div className="category">
      <h1>Collection Page rendered!</h1>
    </div>
  );
};
export default CategoryPage;
