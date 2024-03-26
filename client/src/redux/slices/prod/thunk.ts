import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddProdForm, ProdType } from '../../../types/prod';
import prodService from '../../services/api/prodService';

export const getAllProdsThunk = createAsyncThunk<ProdType[]>('prod/getAllProdsThunk', () =>
  prodService.getAllProds(),
);

export const addProdThunk = createAsyncThunk<ProdType, FormData>(
  'prod/addProdThunk',
  async (prod) => prodService.createNewProd(prod),
);

export const deleteProdThunk = createAsyncThunk<ProdType['id'], ProdType['id']>(
  'prod/deleteProdThunk',
  async (id) => prodService.deleteProdById(id).then(() => id),
);

export const editProdThunk = createAsyncThunk<ProdType, ProdType>('prod/edit', async (prod) =>
  prodService.editProd(prod),
);

export default getAllProdsThunk;
