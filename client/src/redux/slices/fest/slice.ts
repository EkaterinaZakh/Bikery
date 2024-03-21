import { createSlice } from "@reduxjs/toolkit";
import type { FestsStateType } from "../../../types/fest";
import getAllFestsThunk from "./thunk";

const initialState: FestsStateType = {
fests: []
};

export const festsSlice = createSlice({
  name: 'fests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFestsThunk.fulfilled, (state, action) => {
      state.fests = action.payload;
    });
  },
});

export default festsSlice.reducer;