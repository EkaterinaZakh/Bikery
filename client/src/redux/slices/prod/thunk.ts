import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ProdType } from '../../../types/prod';
import prodService from '../../services/api/prodService';

const getAllProdsThunk = createAsyncThunk<ProdType[]>('prod/getAllProdsThunk', () =>
  prodService.getAllProds(),
);

export default getAllProdsThunk;
