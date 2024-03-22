import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FestType, FestsStateType } from '../../../types/fest';
import { addFestThunk, deleteFestThunk, getAllFestsThunk } from './thunk';

const initialState: FestsStateType = {
  fests: [],
};

export const festsSlice = createSlice({
  name: 'fests',
  initialState,
  reducers: {
    setAllFests: (state, action: PayloadAction<FestType[]>) => {
      state.fests = action.payload;
    },
  },
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

export const { setAllFests } = festsSlice.actions;

export default festsSlice.reducer;
