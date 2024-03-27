import { createSlice } from '@reduxjs/toolkit';
import getAllCartThunk from './thunk';
import type { CartTypeState } from '../../../types/cart';

const initialState: CartTypeState = {
  cart: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCartThunk.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
