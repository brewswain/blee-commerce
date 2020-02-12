export const addToCart = (cartItems, addedCartItem) => {
  let itemExists = cartItems.find(cartItem => cartItem.id === addedCartItem.id);

  if (itemExists) {
    return cartItems.map(cartItem =>
      cartItem.id === addedCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...addedCartItem, quantity: 1 }];
};

export const removeFromCart = (cartItems, cartItemRemoved) => {
  let itemExists = cartItems.find(
    cartItem => cartItem.id === cartItemRemoved.id
  );

  if (itemExists.quantity === 1) {
    // this is the same code used in the cart-reducer for our
    // CLEAR_CART_ITEM action.

    return cartItems.filter(cartItem => cartItem.id !== cartItemRemoved.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemRemoved.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
