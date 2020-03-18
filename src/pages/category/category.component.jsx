import React from "react";
import { connect } from "react-redux";

import ShopItem from "../../components/shop-item/shop-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./category.styles.scss";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="items">
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
