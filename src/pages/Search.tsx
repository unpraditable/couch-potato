// src/components/movies/MovieDetails.tsx
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchMovies } from "../hooks/useSearchMovies";

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const { movies, search } = useSearchMovies();

  const query = searchParams.get("q") || "";

  console.log(query, "params");

  useEffect(() => {
    if (query) {
      search(query);
    }
  }, [query, search]);

  console.log(movies, "movie");

  return <h1>Hello!</h1>;
};

export default SearchPage;
