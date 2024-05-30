// Logica de los estados de redux

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/user';
import { removeToken, setToken } from '../../../services/auth/authService';

enum authStatus {
  authenticated = 'authenticated',
  checking = 'checking',
  notAuthenticated = 'notAuthenticated',
}

interface AuthState {
  authStatus: string | authStatus;
  user: User | null;
}

// export interface userState {
//   name: string;
//   lastname: string;
//   username: string;
//   email: string;
//   role: string;
//   is_active: boolean;
// }

// const userState: User = {
//   name: '',
//   lastname: '',
//   username: '',
//   email: '',
//   role: '',
//   is_active: false,
// };

const initialState: AuthState = {
  authStatus: authStatus.notAuthenticated,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.authStatus = authStatus.notAuthenticated;
      state.user = null;
      removeToken();
    },
    setUserToken: (state, action: PayloadAction<string>) => {
      state.authStatus = authStatus.authenticated;
      setToken(action.payload);
    },
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      const { authStatus, user } = action.payload;
      state.authStatus = authStatus;
      state.user = user;
    },
  },
});

export const { setUser, logoutUser, setUserToken, setAuthState } =
  authSlice.actions;

export default authSlice.reducer;
