import { combineReducers, createStore } from "redux";
import cartReducer from "./cart";
import stepReducer from "./step";

// Combine all stores
const rootReducer = combineReducers({
  cart: cartReducer,
  currentStep: stepReducer,
});

export default createStore(rootReducer);
