import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '@store/auth/types';

const initialState: IAuthState = {
  isLoading: false,
  email: '',
  userId: '',
  error: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoading = true;
    },
    loginSuccess(state, { payload }) {
      state.isLoading = false;
      state.email = payload.email;
      state.userId = payload.userId;
      state.error = '';
    },
    loginError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    logout(state) {
      state.isLoading = true;
    },
    logoutSuccess(state) {
      state.email = '';
      state.userId = '';
      state.error = '';
      state.isLoading = false;
    },
    logoutError(state) {
      state.error = '';
      state.isLoading = false;
    },
    setLoading(state, { payload }) {
      state.isLoading = payload;
    }
  },
})

export const {
  login,
  loginSuccess,
  loginError,
  logout,
  logoutSuccess,
  logoutError,
  setLoading,
} = authSlice.actions;

export default authSlice.reducer;