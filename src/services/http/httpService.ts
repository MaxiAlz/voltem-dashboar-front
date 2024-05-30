import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { getToken } from '../auth/authService';
import { HttpClient, RequestConfig } from './httpServiceInteface';

const axiosConfig = (config?: RequestConfig): AxiosRequestConfig => {
  const token = getToken();
  const headers = token ? { ...config?.headers, Authorization: `Bearer ${token}` } : config?.headers;
  const baseURL = import.meta.env.VITE_API_URL;
  return {
    ...config,
    headers,
    baseURL
  };
};

const httpService: HttpClient = {
  async get<TResponse>(
    url: string,
    config?: RequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.get<TResponse>(url, axiosConfig(config));
  },
  async post<TResponse, TData = any>(
    url: string,
    data?: TData,
    config?: RequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.post<TResponse>(url, data, axiosConfig(config));
  },
  async put<TResponse, TData = any>(
    url: string,
    data?: TData,
    config?: RequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.put<TResponse>(url, data, axiosConfig(config));
  },
  async delete<TResponse>(
    url: string,
    config?: RequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.delete<TResponse>(url, axiosConfig(config));
  },
};

export default httpService;