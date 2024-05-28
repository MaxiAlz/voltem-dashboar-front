export interface PaginatedData<T> {
    items: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
    pageSize: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  }


export type PaginationInfo = Omit<PaginatedData<any>, 'items'>;