import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalResults: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalResults,
}) => {
  if (totalPages <= 1) return null;

  return (
    <>
      <nav
        className="flex items-center justify-center space-x-2"
        aria-label="Pagination"
      >
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Go to previous page"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Go to next page"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </nav>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600 dark:text-gray-400">Go to page:</span>
          <select
            value={currentPage}
            onChange={(e) => onPageChange(parseInt(e.target.value))}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-3 py-1 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing {(currentPage - 1) * 20 + 1} -{" "}
          {Math.min(currentPage * 20, totalResults)} of{" "}
          {totalResults.toLocaleString()} movies
        </div>
      </div>
    </>
  );
};

export default Pagination;
