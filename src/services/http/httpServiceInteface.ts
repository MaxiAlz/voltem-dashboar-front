import { AxiosResponse } from 'axios';

export interface HttpClient {
  get<TResponse>(
    url: string,
    config?: RequestConfig,
  ): Promise<AxiosResponse<TResponse>>;
  post<TResponse, TData = any>(
    url: string,
    data?: TData,
    config?: RequestConfig,
  ): Promise<AxiosResponse<TResponse>>;
  put<TResponse, TData = any>(
    url: string,
    data?: TData,
    config?: RequestConfig,
  ): Promise<AxiosResponse<TResponse>>;
  delete<TResponse>(
    url: string,
    config?: RequestConfig,
  ): Promise<AxiosResponse<TResponse>>;
}

export interface RequestConfig {
  headers?: { [key: string]: string };
  params?: { [key: string]: any };
}
