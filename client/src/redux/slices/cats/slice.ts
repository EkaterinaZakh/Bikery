import { createSlice } from '@reduxjs/toolkit';
import type { CategoryStateType } from '../../../types/cats';
import getAllFestsThunk from './thunk';

const initialState: CategoryStateType = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFestsThunk.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
