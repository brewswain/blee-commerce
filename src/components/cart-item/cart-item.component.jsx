import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="cart-item" className="item-image" />
      <div className="container">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
