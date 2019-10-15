import * as actionTypes from "./actionTypes";
import instance from "./instance";
import axios from "axios";

export const fetchItemDetail = itemID => {
  return async dispatch => {
    dispatch({
      type: actionTypes.SET_ITEM_LOADING
    });
    try {
      const res = await instance.get(`items/${itemID}/`);
      const item = res.data;
      dispatch({
        type: actionTypes.FETCH_ITEM_DETAIL,
        payload: item
      });
    } catch (error) {
      console.error(error);
    }
  };
};
