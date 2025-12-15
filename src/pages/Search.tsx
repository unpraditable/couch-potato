// src/components/movies/MovieDetails.tsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchMovies } from "../hooks/useSearchMovies";
import MovieCard from "../components/Movie/MovieCard";
import SearchBar from "../components/General/SearchBar";
import Header from "../components/General/Header";
import Pagination from "../components/General/Pagination";

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { searchResults, search } = useSearchMovies();
  const {
    results: movies,
    page: currentPage,
    total_pages: totalPages,
    total_results: totalResults,
  } = searchResults;
  const query = searchParams.get("q") || "";
  const page = searchParams.get("page") || "1";
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      search(query, page);
    }
  }, [query, page, search]);

  const handlePageChange = (page: number) => {
    navigate(`/search/movie?q=${encodeURIComponent(query)}&page=${page}`);
  };

  return (
    <>
      <Header />
      <section className="bg-white dark:bg-gray-700 dark:text-white">
        <div className="container mx-auto">
          <h2 className="text-xl text-center mb-6 font-bold">
            Search Results For "{query}"
          </h2>
          <SearchBar />
          <ul className="grid grid-cols-2 gap-4 justify-items-center sm:grid-cols-4 lg:grid-cols-5">
            {movies.map((movie) => {
              return <MovieCard movie={movie} />;
            })}
          </ul>

          {totalPages > 1 && (
            <div className="mt-8 space-y-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalResults={totalResults}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
