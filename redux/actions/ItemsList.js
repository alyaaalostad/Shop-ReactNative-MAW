import instance from "./instance";

import { FETCH_ITEMS, FILTER_ITEMS } from "./actionTypes";

export const fetchItems = () => {
  return async dispatch => {
    try {
      const response = await instance.get("items/");
      const items = response.data;
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
