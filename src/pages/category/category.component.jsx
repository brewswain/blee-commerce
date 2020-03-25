import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ShopItem from "../../components/shop-item/shop-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./category.styles.scss";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="category">
      <h2 className="category-page-title">
        {title}
        <span className="category-page-subtitle">
          <Link to="/shop" className="subtitle-link">
             - Return to Shop here!
          </Link>
        </span>
      </h2>
      <div className="category-page-items">
        {items.map(item => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
