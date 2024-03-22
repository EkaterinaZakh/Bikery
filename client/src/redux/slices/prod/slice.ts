import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import getAllProdsThunk from './thunk';
import type { ProdStateType, ProdType } from '../../../types/prod';

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
  },
});

export default prodsSlice.reducer;
