import React from "react";
import { connect } from "react-redux";

import { toggleVisibility } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingCartIcon } from "../../assets/Orion_shopping-cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleVisibility }) => (
  <div className="cart-icon" onClick={toggleVisibility}>
    <ShoppingCartIcon className="shopping-cart-icon" />
    {/* <span className="count">0</span> */}
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleVisibility: () => dispatch(toggleVisibility())
});

export default connect(null, mapDispatchToProps)(CartIcon);
