import { combineReducers } from "redux";

// Reducers
import listReducer from "./ItemsList";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  listState: listReducer,
  authState: authReducer,
  cartState: cartReducer
});
