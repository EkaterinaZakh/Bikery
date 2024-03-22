import { createSlice } from '@reduxjs/toolkit';
import type { FestsStateType } from '../../../types/fest';
import { addFestThunk, deleteFestThunk, getAllFestsThunk } from './thunk';

const initialState: FestsStateType = {
  fests: [],
};

export const festsSlice = createSlice({
  name: 'fests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFestsThunk.fulfilled, (state, action) => {
      state.fests = action.payload;
    });
    builder.addCase(addFestThunk.fulfilled, (state, action) => {
      state.fests.unshift(action.payload);
    });
    builder.addCase(deleteFestThunk.fulfilled, (state, action) => {
      if (!state.fests) return;
      state.fests = state.fests.filter((fest) => fest.id !== action.payload);
    });
  },
});

export default festsSlice.reducer;
