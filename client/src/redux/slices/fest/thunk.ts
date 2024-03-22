import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddFestForm, FestType } from '../../../types/fest';
import festService from '../../services/api/festService';

export const getAllFestsThunk = createAsyncThunk<FestType[]>('fest/getAllFestsThunk', () =>
  festService.getAllFests(),
);

export const addFestThunk = createAsyncThunk<FestType, AddFestForm>('fest/addFestThunk', (fest) =>
  festService.createNewFest(fest),
);

export const deleteFestThunk = createAsyncThunk<FestType['id'], FestType['id']>(
  'fest/deleteFestThunk',
  (id) => festService.deleteFestById(id).then(() => id),
);
