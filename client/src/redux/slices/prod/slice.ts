import { createSlice } from '@reduxjs/toolkit';
import { addProdThunk, deleteProdThunk, getAllProdsThunk } from './thunk';
import type { ProdStateType } from '../../../types/prod';

const initialState: ProdStateType = {
  prods: [],
};

export const prodsSlice = createSlice({
  name: 'prods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProdsThunk.fulfilled, (state, action) => {
      state.prods = action.payload;
    });

    builder.addCase(addProdThunk.fulfilled, (state, action) => {
      state.prods.unshift(action.payload);
    });

    builder.addCase(deleteProdThunk.fulfilled, (state, action) => {
      state.prods = state.prods?.filter((product) => product.id !== action.payload);
    });
  },
});

export default prodsSlice.reducer;
