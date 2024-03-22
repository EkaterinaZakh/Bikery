import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RaceStateType, RaceType } from '../../../types/race';
import getAllRaceThunk from './thunk';

const initialState: RaceStateType = {
  races: [],
};

export const raceSlice = createSlice({
  name: 'races',
  initialState,
  reducers: {
    setAllRaces: (state, action: PayloadAction<RaceType[]>) => {
      state.races = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRaceThunk.fulfilled, (state, action) => {
      state.races = action.payload;
    });
  },
});

export const { setAllRaces } = raceSlice.actions;
export default raceSlice.reducer;
