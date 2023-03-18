export const addToCart =
  (product, quantity, pizzaVarient, sauceVarient, cheeseVarient, meatVarient) =>
  (dispatch, getState) => {
    var cartItem = {
      name: product.name,
      quantity: Number(quantity),
      baseVarient: pizzaVarient,
      sauceVarient: sauceVarient,
      cheeseVarient: cheeseVarient,
      meatVarient: meatVarient,
      _id: product._id,
      image: product.image,
      prices: product.base,

      pricePerProduct:
        product.base[0][pizzaVarient] +
        product.sauce[0][sauceVarient] +
        product.cheese[0][cheeseVarient] +
        product.meat[0][meatVarient],

      totalPrice:
        (product.base[0][pizzaVarient] +
          product.sauce[0][sauceVarient] +
          product.cheese[0][cheeseVarient] +
          product.meat[0][meatVarient]) *
        quantity,
    };

    if (cartItem.quantity > 10) {
      alert("you cannot add more than 10 items");
    } else {
      if (cartItem.quantity <= 0) {
        dispatch({ type: "DELETE_FROM_CART", payload: product });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
    }

    const cartItems = getState().cartReducer.cartItems;

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
