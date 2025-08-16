export const getTotalPayment = (state) =>
  Math.round(state.cart.reduce((total, item) => total + (item.price || 0), 0));

