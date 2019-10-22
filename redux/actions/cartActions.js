import { REMOVE_CART, ADD_CART, CHECKOUT } from "./actionTypes";

export const addCart = cartItem => {
  return {
    type: ADD_CART,
    payload: cartItem
  };
};

export const removeCart = cart => {
  return {
    type: REMOVE_CART,
    payload: cart
  };
};

export const checkout = () => {
  return {
    type: CHECKOUT
  };
};
