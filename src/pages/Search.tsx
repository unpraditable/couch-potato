import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useSearchMovies } from "../hooks/useSearchMovies";
import MovieCard from "../components/Movie/MovieCard";
import SearchBar from "../components/General/SearchBar";
import Header from "../components/General/Header";
import Pagination from "../components/General/Pagination";
import ErrorWithRetryButton from "../components/General/ErrorWithRetryButton";
import Loader from "../components/General/Loader";

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q") || "";
  const page = Number(searchParams.get("page") || 1);

  const { searchResults, loading, error, refetch } = useSearchMovies(
    query,
    page
  );

  const {
    results: movies,
    page: currentPage,
    total_pages: totalPages,
    total_results: totalResults,
  } = searchResults;

  const handlePageChange = (page: number) => {
    navigate(`/search/movie?q=${encodeURIComponent(query)}&page=${page}`);
  };

  return (
    <>
      <Header />

      <section className="bg-white dark:bg-gray-700 dark:text-white min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-xl text-center mb-6 font-bold">
            Search Results For "{query}"
          </h2>

          <SearchBar />

          {loading && <Loader />}

          {error && <ErrorWithRetryButton error={error} onRetry={refetch} />}

          {!loading && !error && (
            <>
              <ul className="grid grid-cols-2 gap-4 justify-items-center sm:grid-cols-4 lg:grid-cols-5">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>

              {totalPages > 1 && (
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalResults={totalResults}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
