import React from "react";
import { connect } from "react-redux";

import {
  clearCartItem,
  addCartItem,
  removeCartItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, addCartItem, removeCartItem, clearItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="checkout-image-container">
        <img src={imageUrl} alt="product" className="checkout-image" />
        <div className="checkout-name">{name}</div>
      </div>
      <div className="description-container">
        <div className="checkout-price">${price}</div>
        <div className="quantity">
          <div
            className="quantity-arrow"
            onClick={() => removeCartItem(cartItem)}
          >
            &#10094;
          </div>
          <span className="checkout-quantity">{quantity}</span>
          <div className="quantity-arrow" onClick={() => addCartItem(cartItem)}>
            &#10095;
          </div>
        </div>
        <div className="checkout-total">${price * quantity}</div>
      </div>
      <div
        className="remove-button-container"
        onClick={() => clearItem(cartItem)}
      >
        <div className="remove-button">&#10005;</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: cartItem => dispatch(clearCartItem(cartItem)),
  addCartItem: cartItem => dispatch(addCartItem(cartItem)),
  removeCartItem: cartItem => dispatch(removeCartItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
