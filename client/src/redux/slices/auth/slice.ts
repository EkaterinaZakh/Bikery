import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../../../types/auth';
import { loginThunk, logoutThunk, refreshAuth, signupThunk } from './thunks';

const initialState: AuthState = {
  accessToken: '',
  user: {
    status: 'unknown',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => action.payload,
  },
  extraReducers: (builder) => { 
    builder.addCase(loginThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.user = {status: 'guest'};
      state.accessToken = '';
    });                            
    builder.addCase(signupThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(refreshAuth.fulfilled, (state, action) => action.payload);
    builder.addCase(refreshAuth.rejected, (state) => {
      state.user.status = 'guest';
    });
  },
});

// Action creators are generated for each case reducer function
export const { login} = authSlice.actions;

export default authSlice.reducer;
