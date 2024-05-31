// import { Dispatch } from '@reduxjs/toolkit';
// import { logoutUser } from '../../redux/slices/auth/authSlice';

export const TOKEN_KEY = 'voltemToken';

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
  if (getToken()) {
    removeToken();
  }
  localStorage.setItem(TOKEN_KEY, token);
};

// export const checkAuthToken = () => async (dispatch: Dispatch<any>) => {
//   try {
//     const jwt = localStorage.getItem(TOKEN_KEY);
    

//     // if (!jwt) {
//     //   dispatch(logoutUser());
//     //   return null;
//     // }

//     const response: any = await api.get('/profile', null);
//     dispatch(loginSuccess(response));
//   } catch (error) {
//     dispatch(loginError(error));
//   }
// };
