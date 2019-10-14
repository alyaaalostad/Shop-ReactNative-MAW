import { combineReducers } from "redux";

// Reducers
import itemReducer from "./ItemDetail";
import listReducer from "./ItemsList";
import authReducer from "./authReducer";
export default combineReducers({
  rootState: listReducer,
  itemState: itemReducer,
  authState: authReducer
});
