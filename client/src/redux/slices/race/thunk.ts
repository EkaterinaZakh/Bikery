import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RaceType } from '../../../types/race';
import raceService from '../../services/api/raceService';

const getAllRaceThunk = createAsyncThunk<RaceType[]>('race/getAllRaceTnunk', () =>
  raceService.getAllRace(),
);

export default getAllRaceThunk;
