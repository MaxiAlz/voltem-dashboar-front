import { useState, useEffect } from 'react';
import  { AxiosResponse, AxiosError } from 'axios';
import { PaginatedData, PaginationInfo } from '../common/interfaces/PaginatedData';
import { HttpClient } from '../services/http/httpServiceInteface';
import httpService from '../services/http/httpService';

interface UseAxiosResult<T> {
  data: T[] | null;
  pagination: PaginationInfo;
  error: AxiosError | null;
  loading: boolean;
  refetch: () => void;
  setPagination: React.Dispatch<React.SetStateAction<PaginationInfo>>
}

const paginationDefault: PaginationInfo = {
  currentPage:1,
  hasNextPage:false,
  hasPreviousPage:false,
  pageSize:10,
  totalItems:0,
  totalPages:1
}

const useAxios = <T = unknown>(url: string): UseAxiosResult<T> => {


  
  const [data, setData] = useState<T[] | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>(paginationDefault);  
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  
  const fetchData = async () => {

    const httpClient: HttpClient = httpService;
    setLoading(true);
    try {
      const response: AxiosResponse<PaginatedData<T>> = await httpClient.get(url + `?size=15&page=${pagination.currentPage}`);
      const {currentPage, hasNextPage,hasPreviousPage,pageSize, items, totalItems, totalPages} = response.data;
      
      setData(items);
      setPagination({
        currentPage, 
        hasNextPage, 
        hasPreviousPage,
        pageSize,
        totalItems,
        totalPages
      })
      
      setError(null);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pagination.currentPage]);

  const refetch = () => {
    fetchData();
  };

  return { data, pagination, error, loading, refetch, setPagination };
};

export default useAxios;