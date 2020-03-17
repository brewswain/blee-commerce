import React from "react";
import { connect } from "react-redux";

// import ShopItem from "../../components/shop-item/shop-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./category.styles.scss";

const CategoryPage = ({ match, collection }) => {
  console.log(collection);

  return (
    <div className="category">
      <h1>Collection Page rendered!</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
