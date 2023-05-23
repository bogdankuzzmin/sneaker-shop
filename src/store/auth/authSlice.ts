import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '@store/auth/types';

const initialState: IAuthState = {
  isLoading: false,
  email: '',
  accessToken: '',
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
      state.accessToken = payload.accessToken;
      state.error = '';
    },
    loginError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    authCheckStatus(state, { payload }) {
      state.email = payload.email;
      state.accessToken = payload.accessToken;
      state.isLoading = payload.isLoading;
    },
    logout(state) {
      state.isLoading = true;
    },
    logoutSuccess(state) {
      state.email = '';
      state.accessToken = '';
      state.error = '';
      state.isLoading = false;
    },
    logoutError(state, { payload }) {
      state.error = '';
      state.isLoading = false;
    },
  },
})

export const { login, loginSuccess, loginError, authCheckStatus, logout, logoutSuccess, logoutError } = authSlice.actions;
export default authSlice.reducer;