// src/components/movies/MovieDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { movie } = useMovieDetails(id);

  console.log(movie, "movie");

  return <h1>Hello!</h1>;
};

export default MovieDetailsPage;
