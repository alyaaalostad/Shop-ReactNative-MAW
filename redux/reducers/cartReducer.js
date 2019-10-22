import { REMOVE_CART, ADD_CART, CHECKOUT } from "../actions/actionTypes";
const initialState = {
  cart: []
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CART:
      let newcart2 = state.cart.filter(item => item !== action.payload);
      return {
        ...state,
        cart: [...newcart2]
      };
    case ADD_CART:
      let newItems = state.cart;
      let item = newItems.find(orderItem => {
        return action.payload.item.id === orderItem.item.id;
      });

      item
        ? (item.quantity += 1) &&
          (item.item.price = item.item.price * item.quantity)
        : newItems.push(action.payload);
      return {
        ...state,
        cart: [...newItems]
      };
    case CHECKOUT:
      return {
        ...state,
        cart: [],
        quantity: 0
      };
    default:
      return state;
  }
};

export default cartReducer;
