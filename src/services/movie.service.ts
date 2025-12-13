// src/services/tmdb.service.ts
import axios from "axios";
import type { IMovie } from "../types/IMovie.ts";
import type { IMovieDetails } from "../types/IMovieDetails.ts";
import type { IMovieSearchResults } from "../types/IMovieSearchResults.ts";

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
    try {
      const response = await tmdbApi.get("/movie/popular");
      return response.data.results;
    } catch (error) {
      console.error("Error getting popular movies", error);
      throw error;
    }
  },

  getNowPlayingMovies: async (): Promise<IMovie[]> => {
    try {
      const response = await tmdbApi.get("/movie/now_playing");
      return response.data.results;
    } catch (error) {
      console.error("Error getting now playing movies", error);
      throw error;
    }
  },

  getTopRated: async (): Promise<IMovie[]> => {
    try {
      const response = await tmdbApi.get("/movie/top_rated");
      return response.data.results;
    } catch (error) {
      console.error("Error getting top rated movies", error);
      throw error;
    }
  },

  getUpcoming: async (): Promise<IMovie[]> => {
    try {
      const response = await tmdbApi.get("/movie/upcoming");
      return response.data.results;
    } catch (error) {
      console.error("Error getting upcoming movies", error);
      throw error;
    }
  },

  getMovieDetails: async (id: number): Promise<IMovieDetails> => {
    try {
      const response = await tmdbApi.get(`/movie/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error getting movie details", error);
      throw error;
    }
  },

  searchMovies: async (
    keyword: string,
    page: number = 1
  ): Promise<IMovieSearchResults> => {
    try {
      const response = await tmdbApi.get("/search/movie", {
        params: { query: keyword, page },
      });
      return response.data;
    } catch (error) {
      console.error(`Error searching movies for "${keyword}":`, error);
      throw error;
    }
  },
};
