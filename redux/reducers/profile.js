import { FETCH_PROFILE, EDIT_PROFILE } from "../actions/actionTypes";

const initialState = {
  profile: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
