import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RaceStateType, RaceType } from '../../../types/race';
import getAllRaceThunk, { addRaceThunk, addRatingThunk, editRaceThunk, deleteRaceThunk } from './thunk';


const initialState: RaceStateType = {
  races: [],
  selectedRaces: null,
};

export const raceSlice = createSlice({
  name: 'races',
  initialState,
  reducers: {
    setAllRaces: (state, action: PayloadAction<RaceType[]>) => {
      state.races = action.payload;
    },
    setSelectedRacesById: (state, action: PayloadAction<RaceType['id']>) => {
      const selectedRaces = state.races.find((race) => race.id === action.payload);
      if (selectedRaces) state.selectedRaces = selectedRaces;
    },
    clearSelectedRaces: (state) => {
      state.selectedRaces = null;
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
      state.races = state.races.map((el) => (el.id === rate.raceId ? el.rates.push(rate) : el));

    builder.addCase(editRaceThunk.fulfilled, (state, action) => {
      if (!state.races) return;
      state.races = state.races.map((race) =>
        race.id === action.payload.id ? action.payload : race,
      );
    });
  },
});

export const { setAllRaces, setSelectedRacesById, clearSelectedRaces } = raceSlice.actions;
export default raceSlice.reducer;
