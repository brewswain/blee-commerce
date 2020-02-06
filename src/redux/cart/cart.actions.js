import { CartActionTypes } from "./cart.types.js";

export const toggleVisibility = () => ({
  type: CartActionTypes.TOGGLE_VISIBILITY
});

export const addCartItem = cartItem => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: cartItem
});
