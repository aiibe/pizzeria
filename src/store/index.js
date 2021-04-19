import { combineReducers, createStore } from "redux";
import menuReducer from "./menu";
import cartReducer from "./cart";
import stepReducer from "./step";

// Combine all stores
const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  currentStep: stepReducer,
});

export default createStore(rootReducer);
