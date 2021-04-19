import { combineReducers, createStore } from "redux";
import cartReducer from "./cart";
import stepReducer from "./step";
import currencyReducer from "./currency";

// Combine all stores
const rootReducer = combineReducers({
  cart: cartReducer,
  currentStep: stepReducer,
  currency: currencyReducer,
});

export default createStore(rootReducer);
