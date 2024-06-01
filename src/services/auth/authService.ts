import { Dispatch } from '@reduxjs/toolkit';
import httpService from '../http/httpService';
import { logoutUser, setUser } from '../../redux/slices/auth/authSlice';
import { User } from '../../types/user';
import { HttpClient } from '../http/httpServiceInteface';
import { notify } from '../../hooks/notify';

export const TOKEN_KEY = 'voltemToken';
const httpClient: HttpClient = httpService;

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

export const checkAuthToken = () => async (dispatch: Dispatch<any>) => {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);

    if (jwt) {
      const { data } = await httpClient.get<User>('/auth/profile');
      dispatch(setUser(data));

      return;
    }
    if (!jwt) {
      dispatch(logoutUser());
      return null;
    }
  } catch (error) {
    dispatch(logoutUser());
    notify({
      message: 'Ha ocurrido un error al iniciar sesion',
      type: 'error',
    });
  }
};
