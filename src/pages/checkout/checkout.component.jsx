import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../../components/header/header.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, subtotal }) => (
  <div className="header-container">
    <Header />

    <div className="page-container">
      <div className="checkout-header">
        <h1 className="title">Products</h1>
        <div className="option-container">
          <h1 className="title">Price</h1>
          <h1 className="title">Quantity</h1>
          <h1 className="title">Total</h1>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="subtotal-container">
        <h3 className="subtotal-text">Subtotal:</h3>
        <h3 className="subtotal-value">${subtotal}</h3>
      </div>
      <div className="payment-container">
        <div className="test-message">
          As this is a demo, please use the following Card for payments:
          <br />
          4242 4242 4242 4242 - Exp: 05/21 - CVV: 123
        </div>
        <StripeCheckoutButton price={subtotal} />
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  subtotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
