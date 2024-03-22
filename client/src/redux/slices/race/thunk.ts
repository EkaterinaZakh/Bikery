import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddRaceForm, RaceType } from '../../../types/race';
import raceService from '../../services/api/raceService';

const getAllRaceThunk = createAsyncThunk<RaceType[]>('race/getAllRaceTnunk', () =>
  raceService.getAllRace(),
);

export const addRaceThunk = createAsyncThunk<RaceType, AddRaceForm>('races/addRaceThunk', (race) =>
  raceService.addNewRace(race),
);

export const deleteRaceThunk = createAsyncThunk<RaceType['id'], RaceType['id']>(
  'races/deleteRaceThunk',
  (id) => raceService.deleteRaceById(id).then(() => id),
);

export default getAllRaceThunk;
