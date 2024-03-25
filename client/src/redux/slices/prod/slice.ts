import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addProdThunk, deleteProdThunk, editProdThunk, getAllProdsThunk } from './thunk';
import type { ProdStateType, ProdType } from '../../../types/prod';

const initialState: ProdStateType = {
  prods: [],
  selectedProd: null,
};

export const prodsSlice = createSlice({
  name: 'prods',
  initialState,
  reducers: {
    setSelectedProdById: (state, action: PayloadAction<ProdType['id']>) => {
      const selectedProd = state.prods.find((prod) => prod.id === action.payload);
      if (selectedProd) state.selectedProd = selectedProd;
    },

    clearSelectedProd: (state) => {
      state.selectedProd = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProdsThunk.fulfilled, (state, action) => {
      state.prods = action.payload;
    });

    builder.addCase(addProdThunk.fulfilled, (state, action) => {
      state.prods.unshift(action.payload);
    });

    builder.addCase(deleteProdThunk.fulfilled, (state, action) => {
      state.prods = state.prods?.filter((product) => product.id !== action.payload);
    });

    builder.addCase(editProdThunk.fulfilled, (state, action) => {
      if (!state.prods) return;
      state.prods = state.prods.map((el) => (el.id === action.payload.id ? action.payload : el));
    });
  },
});

export const { setSelectedProdById, clearSelectedProd } = prodsSlice.actions;

export default prodsSlice.reducer;
