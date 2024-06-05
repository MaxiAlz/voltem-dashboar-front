import { PaginationInfo } from '../common/interfaces/PaginatedData';

interface Props {
  pagination: PaginationInfo;
  onPageChange: (page: number) => void;
}

const Pagination = (props: Props) => {
  const {
    currentPage,
    hasNextPage,
    hasPreviousPage,
    /* pageSize,
    totalItems, */
    totalPages,
  } = props.pagination;
  const { onPageChange } = props;

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
    <nav className="mt-4">
      <ul className="flex flex-wrap items-center justify-center">
        <li>
          <button
            className={`flex ${
              !hasPreviousPage
                ? ''
                : 'hover:border-primary hover:bg-gray hover:text-primary dark:hover:bg-graydark dark:hover:border-white dark:hover:text-white'
            } h-9 w-9 items-center justify-center rounded-l-md border
            border-stroke  dark:border-strokedark
              `}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={!hasPreviousPage}
          >
            <svg
              className="fill-current"
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.17578 15.1156C7.00703 15.1156 6.83828 15.0593 6.72578 14.9187L0.369531 8.44995C0.116406 8.19683 0.116406 7.80308 0.369531 7.54995L6.72578 1.0812C6.97891 0.828076 7.37266 0.828076 7.62578 1.0812C7.87891 1.33433 7.87891 1.72808 7.62578 1.9812L1.71953 7.99995L7.65391 14.0187C7.90703 14.2718 7.90703 14.6656 7.65391 14.9187C7.48516 15.0312 7.34453 15.1156 7.17578 15.1156Z"
                fill=""
              ></path>
            </svg>
          </button>
        </li>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`
                                flex items-center justify-center border px-4 py-[5px]
                                ${
                                  currentPage === page
                                    ? 'border-primary text-primary dark:border-white dark:text-white'
                                    : 'border-stroke border-l-transparent'
                                }
                                dark:text-gray dark:border-strokedark  dark:hover:bg-graydark
                                font-medium hover:bg-gray hover:text-primary hover:border-primary 
                        `}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            className={`flex ${
              !hasNextPage
                ? ''
                : 'hover:border-primary hover:text-primary hover:bg-gray dark:hover:bg-graydark dark:hover:border-white dark:hover:text-white'
            } h-9 w-9 items-center justify-center rounded-r-md border border-stroke border-l-transparent 
              dark:border-strokedark`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!hasNextPage}
          >
            <svg
              className="fill-current"
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.819531 15.1156C0.650781 15.1156 0.510156 15.0593 0.369531 14.9468C0.116406 14.6937 0.116406 14.3 0.369531 14.0468L6.27578 7.99995L0.369531 1.9812C0.116406 1.72808 0.116406 1.33433 0.369531 1.0812C0.622656 0.828076 1.01641 0.828076 1.26953 1.0812L7.62578 7.54995C7.87891 7.80308 7.87891 8.19683 7.62578 8.44995L1.26953 14.9187C1.15703 15.0312 0.988281 15.1156 0.819531 15.1156Z"
                fill=""
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
