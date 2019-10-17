import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export const addItem = (item, navigation) => {
  return dispatch => {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });
    console.log("Im here");
    navigation.navigate("CartScreen");
  };
};

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});
