import { combineReducers } from "redux";

// Reducers
import listReducer from "./ItemsList";
import authReducer from "./authReducer";

export default combineReducers({
  listState: listReducer,
  authState: authReducer
});
