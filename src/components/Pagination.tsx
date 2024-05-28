import React from 'react';
import { PaginationInfo } from '../common/interfaces/PaginatedData';

interface Props{
    pagination: PaginationInfo,
    onPageChange: (page: number) => void
}

const Pagination = (props: Props) => {
    const {currentPage, hasNextPage, hasPreviousPage, pageSize, totalItems, totalPages} = props.pagination;
    const {onPageChange} = props;

    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="flex items-center justify-center space-x-2">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            className={`px-3 py-1 border rounded ${hasPreviousPage ? 'text-gray-700 border-gray-300 hover:bg-gray-100' : 'text-gray-400 border-gray-200 cursor-not-allowed'}`}
            disabled={!hasPreviousPage}
        >
            Previous
        </button> 
        {pageNumbers.map(page => (
            <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
            {page}
            </button>
        ))}
        <button
            onClick={() => onPageChange(currentPage + 1)}
            className={`px-3 py-1 border rounded ${hasNextPage ? 'text-gray-700 border-gray-300 hover:bg-gray-100' : 'text-gray-400 border-gray-200 cursor-not-allowed'}`}
            disabled={!hasNextPage}
        >
            Next
        </button>
        </div>
    );
};

export default Pagination;