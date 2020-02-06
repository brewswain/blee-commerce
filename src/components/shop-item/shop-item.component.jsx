import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addCartItem } from "../../redux/cart/cart.actions";

import "./shop-item.styles.scss";

const ShopItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="shop-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="container">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton className="add-button" onClick={() => addCartItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(ShopItem);
