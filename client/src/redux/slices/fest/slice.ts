import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FestType, FestsStateType } from '../../../types/fest';
import getAllFestsThunk from './thunk';

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
  },
});

export const { setAllFests } = festsSlice.actions;

export default festsSlice.reducer;
