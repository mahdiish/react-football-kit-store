import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardItems: [],
  },
  reducers: {
    addCardItem(state, action) {
      state.cardItems.push({
        name: action.payload.name,
        location: action.payload.location,
        src: action.payload.src,
        cost: action.payload.cost,
        number: 1,
        id: `${action.payload.name}-${action.payload.location}`,
      });

      const updatedCardItems = state.cardItems.reduce(
        (accumulator, current) => {
          if (!accumulator.find((item) => item.id === current.id)) {
            accumulator.push(current);
          } else {
            accumulator.map((item) => {
              if (item.id === current.id) {
                return item.number++;
              }
              return item;
            });
          }
          return accumulator;
        },
        []
      );
      state.cardItems = updatedCardItems;
    },
    removeCardItem(state, action) {
      const updatedCardItems = state.cardItems
        .map((item) => {
          if (item.id === action.payload.id) {
            item.number--;
            return item;
          }
          return item;
        })
        .filter((item) => {
          return item.number > 0;
        });
      state.cardItems = updatedCardItems;
    },
  },
});

export const { addCardItem, removeCardItem } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
