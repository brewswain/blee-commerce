import { CartActionTypes } from "./cart.types.js";

import { addToCart } from "./cart.utils";

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

    default:
      return state;
  }
};

export default cartReducer;
