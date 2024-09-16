import { createAsyncThunk } from '@reduxjs/toolkit';
import { registration } from '../../api/auth/auth';
import { LoginData } from './auth.types';

export const register = createAsyncThunk(
  'auth/registration',
  async ({ login, password }: LoginData) => {
    const response = await registration(login, password);
    return response.data;
  }
);
