import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RaceStateType, RaceType } from '../../../types/race';
import getAllRaceThunk, { addRaceThunk, addRatingThunk, deleteRaceThunk } from './thunk';

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
    builder.addCase(addRaceThunk.fulfilled, (state, action) => {
      state.races.unshift(action.payload);
    });

    builder.addCase(deleteRaceThunk.fulfilled, (state, action) => {
      if (state.races) state.races = state.races.filter((el) => el.id !== action.payload);
    });
    builder.addCase(addRatingThunk.fulfilled, (state, action) => {
      const rate = action.payload;

      state.races.map((el) => (el.id === rate.raceId ? el.RacerRatings.push(rate) : el));
    });
  },
});

export const { setAllRaces } = raceSlice.actions;
export default raceSlice.reducer;
