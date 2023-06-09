import { configureStore } from "@reduxjs/toolkit";
import {
  formReducer,
  changeLeague,
  changeLocation,
  changeSearchTerm,
} from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export { store, changeLeague, changeLocation, changeSearchTerm };
