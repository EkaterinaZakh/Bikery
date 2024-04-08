import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CommitType } from '../../../types/commit';
import commentService from '../../services/api/commentService';

export const getAllCommitsThunk = createAsyncThunk<CommitType[]>('fest/getAllCommitsThunk', () =>
  commentService.getAllComments(),
);

export const addCommitsThunk = createAsyncThunk<CommitType, { text: string; raceId: number }>(
  'fest/addCommitsThunk',
  ({ text, raceId }) => commentService.createNewCommit(raceId, { text }),
);
