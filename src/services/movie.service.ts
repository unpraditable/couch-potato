// src/services/tmdb.service.ts
import axios from "axios";
import type { IMovie } from "../types/IMovie.ts";
import type { IMovieDetails } from "../types/IMovieDetails.ts";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const movieService = {
  getPopularMovies: async (): Promise<IMovie[]> => {
    const response = await tmdbApi.get("/movie/popular");
    return response.data.results;
  },

  getNowPlayingMovies: async (): Promise<IMovie[]> => {
    const response = await tmdbApi.get("/movie/now_playing");
    return response.data.results;
  },

  getTopRated: async (): Promise<IMovie[]> => {
    const response = await tmdbApi.get("/movie/top_rated");
    return response.data.results;
  },

  getUpcoming: async (): Promise<IMovie[]> => {
    const response = await tmdbApi.get("/movie/upcoming");
    return response.data.results;
  },

  getMovieDetails: async (id: number): Promise<IMovieDetails> => {
    const response = await tmdbApi.get(`/movie/${id}`);
    return response.data;
  },
};
