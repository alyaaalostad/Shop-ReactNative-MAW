import * as actionTypes from "./actionTypes";

import axios from "axios";

export const fetchItemDetail = itemID => {
  return async dispatch => {
    dispatch({
      type: actionTypes.SET_ITEM_LOADING
    });
    try {
      const res = await axios.get(`http://127.0.0.1:8000/item/${itemID}/`);
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
