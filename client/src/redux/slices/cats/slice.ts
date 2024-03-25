import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CategoryStateType, CategoryType } from '../../../types/cats';
import getAllFestsThunk from './thunk';

const initialState: CategoryStateType = {
  categories: [],
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelecteCategory: (state, action: PayloadAction<CategoryType['id']>) => {
      const selectedCategory = state.categories.find((cat) => cat.id === action.payload);
      if (selectedCategory) state.selectedCategory = selectedCategory;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllFestsThunk.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { setSelecteCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
