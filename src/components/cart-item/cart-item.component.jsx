import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="cart-item" className="item-image" />
      <div className="cart-container">
        <span className="cart-name">{name}</span>
        <span className="cart-price">
          <span className="item-quantity">{quantity}</span>{" "}
          <span className="item-multiplier">x </span>
          <span className="item-price">${price}</span>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
