import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CommitsStateType } from '../../../types/commit';
import { addCommitsThunk, getAllCommitsThunk } from './thunk';

const initialState: CommitsStateType = {
  commits: [],
};

export const commitsSlice = createSlice({
  name: 'commits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCommitsThunk.fulfilled, (state, action) => {
      state.commits = action.payload;
    });
    builder.addCase(addCommitsThunk.fulfilled, (state, action) => {
      state.commits.unshift(action.payload);
    });
  },
});

export default commitsSlice.reducer;
