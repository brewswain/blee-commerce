import { CartActionTypes } from "./cart.types.js";

import { addToCart } from "./cart.utils";
import { removeFromCart } from "./cart.utils";

const INITIAL_STATE = {
  isVisible: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionTypes.EMPTY_CART:
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};

export default cartReducer;
