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
