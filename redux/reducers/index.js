import { combineReducers } from "redux";

// Reducers
import itemReducer from "./ItemDetail";
import listReducer from "./ItemsList";
export default combineReducers({
  rootList: listReducer,
  itemState: itemReducer
});
