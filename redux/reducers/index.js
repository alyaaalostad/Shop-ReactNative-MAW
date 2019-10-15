import { combineReducers } from "redux";

// Reducers
import detailReducer from "./ItemDetail";
import listReducer from "./ItemsList";
import authReducer from "./authReducer";
export default combineReducers({
  listState: listReducer,
  detailState: detailReducer,
  authState: authReducer
});
