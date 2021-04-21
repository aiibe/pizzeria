import { combineReducers, createStore } from "redux";
import cartReducer from "./cart";
import currencyReducer from "./currency";
import deliveryReducer from "./delivery";
import paymentReducer from "./payment";

// Combine all stores
const rootReducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
  delivery: deliveryReducer,
  payment: paymentReducer,
});

export default createStore(rootReducer);
