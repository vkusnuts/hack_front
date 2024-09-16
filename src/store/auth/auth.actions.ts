import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMockTodoes } from '../../api/mock/todo';

export const register = createAsyncThunk('auth/registration', async () => {
  const response = await getMockTodoes();
  return response.data;
});
