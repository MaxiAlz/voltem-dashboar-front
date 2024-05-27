import { useState, useEffect } from 'react';
import  { AxiosResponse, AxiosError } from 'axios';
import axiosInstance from '../util/axios';

interface UseAxiosResult<T> {
  data: T | null;
  error: AxiosError | null;
  loading: boolean;
  refetch: () => void;
}

const useAxios = <T = unknown>(url: string): UseAxiosResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<T> = await axiosInstance.get(url);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, error, loading, refetch };
};

export default useAxios;