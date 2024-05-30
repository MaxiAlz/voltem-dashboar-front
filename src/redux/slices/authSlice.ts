// Logica de los estados de redux

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

enum authStatus {
  'authenticated',
  'checking',
  'notAuthenticated',
}

interface AuthState {
  token: string | null;
  authStatus: string | authStatus;
  user: userState | null;
}

export interface userState {
  name: string;
  lastName: String;
  username: string;
  email: string;
  role: string;
  is_active: boolean;
}

const userState: userState = {
  name: '',
  lastName: '',
  username: '',
  email: '',
  role: '',
  is_active: false,
};

const initialState: AuthState = {
  token: null,
  authStatus: authStatus.notAuthenticated,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userState>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.authStatus = authStatus.notAuthenticated;
      (state.token = null), (state.user = null);
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.authStatus = authStatus.authenticated;
    },
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      const { token, authStatus, user } = action.payload;
      state.authStatus = authStatus;
      state.token = token;
      state.user = user;
    },
  },
});

export const { setUser, logoutUser, setToken, setAuthState } =
  authSlice.actions;

export default authSlice.reducer;
