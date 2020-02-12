import { createSelector } from "reselect";

let selectCart = state => state.cart;

export let selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export let selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  )
);

export let selectCartVisible = createSelector(
  [selectCart],
  cart => cart.isVisible
);
