// Logica de los estados de redux

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  name: string;
  username: string;
  email: string;
  role: string;
}

const initialState: userState = {
  name: '',
  username: '',
  email: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userState>) => {
      const { name, username, email, role } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
      state.role = role;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
