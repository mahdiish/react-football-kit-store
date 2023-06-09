import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    league: "All Leagues",
    location: "Home & Away",
    searchTerm: "",
  },
  reducers: {
    changeLeague(state, action) {
      state.league = action.payload;
    },
    changeLocation(state, action) {
      state.location = action.payload;
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { changeLeague, changeLocation, changeSearchTerm } =
  formSlice.actions;

export const formReducer = formSlice.reducer;
