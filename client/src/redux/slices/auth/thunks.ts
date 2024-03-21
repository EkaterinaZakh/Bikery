import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AuthState, LoginForm, SignupForm } from '../../../types/auth';
import authService from '../../services/auth/authService';

export const loginThunk = createAsyncThunk<AuthState, LoginForm>('auth/loginThunk', (formData) =>
  authService.login(formData),
);

export const signupThunk = createAsyncThunk<AuthState, SignupForm>('auth/signup', (formData) =>
  authService.signup(formData),
);

export const refreshAuth = createAsyncThunk<AuthState>('auth/refreshAuth', () =>
  authService.refresh(),
);

export const logoutThunk = createAsyncThunk('auth/logout', async () => authService.logout());

// Допиши недостающие Thunk actions
