import { configureStore } from "@reduxjs/toolkit";
import {
  formReducer,
  changeLeague,
  changeLocation,
  changeSearchTerm,
} from "./slices/formSlice";
import { cartReducer, addCartItem, removeCartItem } from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cart: cartReducer,
  },
});

export {
  store,
  changeLeague,
  changeLocation,
  changeSearchTerm,
  addCartItem,
  removeCartItem,
};
