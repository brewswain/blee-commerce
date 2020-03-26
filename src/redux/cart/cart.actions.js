import { CartActionTypes } from "./cart.types.js";

export const toggleVisibility = () => ({
  type: CartActionTypes.TOGGLE_VISIBILITY
});

export const addCartItem = cartItem => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: cartItem
});

export const removeCartItem = cartItem => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: cartItem
});

export const clearCartItem = cartItem => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: cartItem
});

export const emptyCart = () => ({
  type: CartActionTypes.EMPTY_CART
});
