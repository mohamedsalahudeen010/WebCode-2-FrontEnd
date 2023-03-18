import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "../Reducer/cartReducers";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialStore = {
  cartReducer: {
    cartItems: cartItems,
  },
};

const mainReducer = combineReducers({
  cartReducer: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  mainReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
