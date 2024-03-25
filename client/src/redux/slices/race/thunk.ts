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

export const addRatingThunk = createAsyncThunk<SetRating, SetRating>('races/setRateThunk', (rate) =>
  raceService.setRaceRating(rate),
);
export default getAllRaceThunk;
