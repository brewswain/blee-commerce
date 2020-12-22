import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleVisibility } from "../../redux/cart/cart.actions";
import { hideCart } from "../../redux/cart/cart.actions";

import "./cart-modal.styles.scss";

const CartModal = ({
  history,
  cartItems,
  dispatch,
  isVisible,
  toggleVisibility,
}) => {
  useEffect(() => {
    const cartModal = document.getElementById("cart-modal");
    cartModal.focus();
  }, []);

  return (
    <div
      className="cart-modal"
      id="cart-modal"
      tabindex="0"
      autofocus
      onBlur={() => {
        toggleVisibility();
      }}
    >
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        className="custom-button cart-button"
        onClick={() => {
          history.push("/checkout");
          toggleVisibility();
        }}
      >
        Checkout
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  hideCart: () => dispatch(hideCart()),
  toggleVisibility: () => dispatch(toggleVisibility()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartModal)
);
