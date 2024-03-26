import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CommitsStateType, FestCommitStateType } from '../../../types/commit';
import { addFestCommentThunk, getAllFestsCommentsThunk } from './festthunk';

const initialState: FestCommitStateType = {
  festcomments: [],
};

export const commitsSlice = createSlice({
  name: 'festcomments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFestsCommentsThunk.fulfilled, (state, action) => {
      state.festcomments = action.payload;
    });
    builder.addCase(addFestCommentThunk.fulfilled, (state, action) => {
      state.festcomments.unshift(action.payload);
    });
  },
});

export default commitsSlice.reducer;
