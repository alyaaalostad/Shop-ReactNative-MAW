import { FETCH_ITEMS, FILTER_ITEMS } from "./actionTypes";

import axios from "axios";

export const fetchItems = () => {
  return async dispatch => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/items/");
      const items = response.data;
      // console.log("items ", items);
      dispatch({
        type: FETCH_ITEMS,
        payload: items
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const filterItems = query => {
  return {
    type: FILTER_ITEMS,
    payload: query
  };
};
