import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { migrateStripePayments } from "../../firebase/firebase.utils";

import "./stripe-checkout-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_QOOb8m8Z115vCOxYSNm670Pe006Wd7i59q";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
    migrateStripePayments(token);
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

export default StripeCheckoutButton;
