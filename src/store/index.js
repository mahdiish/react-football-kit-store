import { configureStore } from "@reduxjs/toolkit";
import {
  formReducer,
  changeLeague,
  changeLocation,
  changeSearchTerm,
} from "./slices/formSlice";
import { cardReducer, addCardItem, removeCardItem } from "./slices/cardSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    card: cardReducer,
  },
});

export {
  store,
  changeLeague,
  changeLocation,
  changeSearchTerm,
  addCardItem,
  removeCardItem,
};
