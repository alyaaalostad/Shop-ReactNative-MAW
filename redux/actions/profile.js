import { FETCH_PROFILE, EDIT_PROFILE } from "./actionTypes";

import instance from "./instance";

export const fetchProfile = () => {
  return async dispatch => {
    try {
      const response = await instance.get("profile/");
      const profile = response.data;
      dispatch({
        type: FETCH_PROFILE,
        payload: profile
      });
    } catch (error) {
      console.log("fetch profile error");
      console.error(error.response.data);
    }
  };
};

export const editProfile = newProfile => {
  return async dispatch => {
    try {
      console.log("I AM HERE");
      console.log(newProfile);
      const response = await instance.put("profile/", newProfile);
      const updatedProfile = response.data;
      dispatch({
        type: EDIT_PROFILE,
        payload: updatedProfile
      });
    } catch (error) {
      console.log("edit profile error");
      console.error(error);
    }
  };
};
