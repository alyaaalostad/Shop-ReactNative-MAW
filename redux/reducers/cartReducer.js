import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";
const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let foundItem = state.cart.find(
        item => item.id === action.payload.item.id
      );
      if (foundItem) {
        foundItem.quantity++;

        return {
          ...state,
          cart: [...state.cart]
        };
      } else {
        return {
          ...state,
          cart: state.cart.concat({ cart: action.payload, quantity: 1 })
        };
      }
    case REMOVE_ITEM:
      let newcart2 = state.cart.filter(item => item !== action.payload);
      return {
        ...state,
        cart: [...newcart2]
      };
    case CHECKOUT:
      alert("Thank you for shopping with us!!");
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};

export default cartReducer;
