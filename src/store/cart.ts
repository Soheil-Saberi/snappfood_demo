import { createSlice } from "@reduxjs/toolkit";

interface Cart {
  productId: number;
  count: number;
}

const initialCartState: Array<Cart> = [];

const cart = createSlice({
  name: "cart",
  initialState: { cartUser: initialCartState },
  reducers: {
    emptyCart(state) {
      state.cartUser = [];
    },
    addToCart(state, action) {
      if (state.cartUser.some((item) => item.productId === action.payload)) {
        state.cartUser.map((item) => {
          if (item.productId === action.payload) {
            item.count++;
          }
        });
      } else {
        state.cartUser.push({ productId: action.payload, count: 1 });
      }
    },
    removeFromCart(state, action) {
      state.cartUser.map((item) => {
        if (item.productId === action.payload) {
          if (item.count === 1) {
            state.cartUser = state.cartUser.filter(
              (item) => item.productId !== action.payload
            );
          } else {
            item.count--;
          }
        }
      });
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
