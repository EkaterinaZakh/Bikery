import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddRaceFormType, RaceType } from '../../../types/race';
import raceService from '../../services/api/raceService';
import type { SetRating } from '../../../types/rating';

const getAllRaceThunk = createAsyncThunk<RaceType[]>('race/getAllRaceTnunk', () =>
  raceService.getAllRace(),
);

export const addRaceThunk = createAsyncThunk<RaceType, AddRaceFormType>(
  'races/addRaceThunk',
  (race) => raceService.addNewRace(race),
);

export const deleteRaceThunk = createAsyncThunk<RaceType['id'], RaceType['id']>(
  'races/deleteRaceThunk',
  (id) => raceService.deleteRaceById(id).then(() => id),
);

export const addRatingThunk = createAsyncThunk<SetRating, Omit<SetRating, 'id'>>(
  'races/addRatingThunk',
  (rate) => raceService.setRaceRating(rate),
);

export const editRaceThunk = createAsyncThunk<RaceType, RaceType>(
  'races/editRaceThunk',
  async (race) => raceService.editRace(race),
);

export default getAllRaceThunk;
