import { createSlice } from '@reduxjs/toolkit';
import { isPendingAction, isRejectedAction } from '../../@types';
import { AuthState } from './auth.types';
import { register } from './auth.actions';

const initialState = {
  loginData: {
    login: '',
    password: '',
  },
  token: {
    access: '',
    refresh: '',
  },
  loading: false,
  error: null,
} satisfies AuthState as AuthState;

const mockSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.loginData = { ...action.payload };
    });
    builder.addMatcher(isPendingAction, state => {
      state.loading = true;
    });
    builder.addMatcher(isRejectedAction, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default mockSlice.reducer;
