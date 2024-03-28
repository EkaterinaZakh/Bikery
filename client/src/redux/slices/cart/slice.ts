import { createSlice } from '@reduxjs/toolkit';
import { getAllCartThunk, deleteCartItemThunk, addCartItemThunk } from './thunk';
import type { CartTypeState } from '../../../types/cart';

const initialState: CartTypeState = {
  cart: [],
};

export const categoriesSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCartThunk.fulfilled, (state, action) => {
        state.cart = action.payload;
    });
    builder.addCase(deleteCartItemThunk.fulfilled, (state, action) => {
        if (!state.cart) return;
        state.cart = state.cart.filter((item) => item.productId !== action.payload);
    });
    builder.addCase(addCartItemThunk.fulfilled, (state, action) => {
        state.cart.push(action.payload)
    });
  },
});

export default categoriesSlice.reducer;
