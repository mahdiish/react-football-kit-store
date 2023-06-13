import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItem(state, action) {
      state.cartItems.push({
        name: action.payload.name,
        location: action.payload.location,
        src: action.payload.src,
        cost: action.payload.cost,
        number: 1,
        id: `${action.payload.name}-${action.payload.location}`,
      });

      const updatedCartItems = state.cartItems.reduce(
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
      state.cartItems = updatedCartItems;
    },
    removeCartItem(state, action) {
      const updatedCartItems = state.cartItems
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
      state.cartItems = updatedCartItems;
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
