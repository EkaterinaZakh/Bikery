import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddCommitForm, CommitType, FestCommitType } from '../../../types/commit';
import commentService from '../../services/api/commentService';

export const getAllFestsCommentsThunk = createAsyncThunk<FestCommitType[]>(
  'fests/getAllFestCommentsThunk',
  () => commentService.getAllFestsComments(),
);

export const addFestCommentThunk = createAsyncThunk<
  FestCommitType,
  { text: string; festId: number }
>('fests/addFestCommentsThunk', ({ text, festId }) =>
  commentService.createNewFestCommit(festId, { text }),
);
