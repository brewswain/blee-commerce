import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addCartItem } from "../../redux/cart/cart.actions";

import "./shop-item.styles.scss";

const ShopItem = ({ item, isCategory, addCartItem }) => {
  const { name, price, imageUrl, largeImageUrl } = item;

  return (
    <div className={`${isCategory ? "large-shop-item" : "shop-item"} `}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>

      <div
        className="large-image"
        style={{
          backgroundImage: `url(${largeImageUrl})`
        }}
      ></div>
      <div className={`${isCategory ? "large-container" : "container"}`}>
        <span className="name">{name}</span>
        <span className="price">${price}</span>

        <div className="price-box">
          {isCategory ? (
            <span className="large-container-price">${price}</span>
          ) : null}
          {isCategory ? (
            <CustomButton
              className="large-container-add-button"
              onClick={() => addCartItem(item)}
            >
              Add to Cart
            </CustomButton>
          ) : null}
        </div>
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
