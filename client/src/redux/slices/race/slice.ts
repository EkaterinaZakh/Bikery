import type { PayloadAction, Slice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RaceStateType, RaceType } from '../../../types/race';
import getAllRaceThunk, {
  addRaceThunk,
  addRatingThunk,
  editRaceThunk,
  deleteRaceThunk,
} from './thunk';
import { addCommitsThunk } from '../comments/thunk';

const initialState: RaceStateType = {
  races: [],
  selectedRaces: null,
  modalType: null,
};

export const raceSlice: Slice<RaceStateType> = createSlice({
  name: 'races',
  initialState,
  reducers: {
    setAllRaces: (state, action: PayloadAction<RaceType[]>) => {
      state.races = action.payload;
    },
    setSelectedRacesById: (state, action: PayloadAction<RaceType['id']>) => {
      const selectedRaces = state.races.find((race) => race.id === action.payload);
      if (selectedRaces) {
        state.selectedRaces = selectedRaces;
        state.modalType = 'info';
      }
    },
    openEditModal: (state, action: PayloadAction<RaceType['id']>) => {
      const selectedRace = state.races.find((race) => race.id === action.payload);
      if (selectedRace) {
        state.selectedRaces = selectedRace;
        state.modalType = 'edit';
      }
    },
    clearSelectedRaces: (state) => {
      state.selectedRaces = null;
      state.modalType = null;
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

      state.races.map((el) => (el.id === rate.raceId ? el.RaceRatings.push(rate) : el));
    });

    builder.addCase(editRaceThunk.fulfilled, (state, action) => {
      if (!state.races) return;
      state.races = state.races.map((race) =>
        race.id === action.payload.id ? action.payload : race,
      );
    });
    // addCommitsThunk -> добавить action.payload в комменты к определенной race
    builder.addCase(addCommitsThunk.fulfilled, (state, action) => {
      const { raceId, userId, text, User } = action.payload;
      const raceToUpdate = state.races.find((race) => race.id === raceId);
      if (raceToUpdate) {
        raceToUpdate.CommentRaces = [
          ...(raceToUpdate.CommentRaces || []),
          { text, userId, raceId, User },
        ];
      }
    });
    // builder.addCase(addCommitsThunk.fulfilled, (state, action) => {
    //   const { raceId, text } = action.payload;
    //   const raceToUpdate = state.races.find((race) => race.id === raceId);
    //   if (raceToUpdate) {
    //     const newComment: CommitType = {
    //       raceId,
    //       text,
    //     };
    //     raceToUpdate.CommentRaces = [...(raceToUpdate.CommentRaces || []), newComment];
    //   }
    // });
  },
});

export const { setAllRaces, setSelectedRacesById, clearSelectedRaces } = raceSlice.actions;
export default raceSlice.reducer;
