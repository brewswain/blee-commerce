import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import { emptyCart } from "../../redux/cart/cart.actions";

import { migrateStripePayments } from "../../firebase/firebase.utils";

import "./stripe-checkout-button.styles.scss";

const StripeCheckoutButton = ({ price, emptyCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_QOOb8m8Z115vCOxYSNm670Pe006Wd7i59q";

  const onToken = token => {
    console.log(token);
    migrateStripePayments(token, priceForStripe);
    emptyCart();
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="blee Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}.`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch(emptyCart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
