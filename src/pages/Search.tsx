// src/components/movies/MovieDetails.tsx
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchMovies } from "../hooks/useSearchMovies";
import MovieCard from "../components/Movie/MovieCard";
import SearchBar from "../components/General/SearchBar";
import Header from "../components/General/Header";

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { searchResults, search } = useSearchMovies();
  const { results: movies } = searchResults;
  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (query) {
      search(query);
    }
  }, [query, search]);

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
        </div>
      </section>
    </>
  );
};

export default SearchPage;
