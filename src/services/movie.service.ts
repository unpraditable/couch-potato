import axios from "axios";
import type { Movie } from "../types/Movie.ts";
import type { MovieSearchResults } from "../types/MovieSearchResults.ts";
import type { MovieDetails } from "../types/MovieDetails.ts";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const movieService = {
  getPopularMovies: async (): Promise<Movie[]> => {
    try {
      const response = await tmdbApi.get("/movie/popular");
      return response.data.results;
    } catch (error) {
      console.error("Error getting popular movies", error);
      throw error;
    }
  },

  getNowPlayingMovies: async (): Promise<Movie[]> => {
    try {
      const response = await tmdbApi.get("/movie/now_playing");
      return response.data.results;
    } catch (error) {
      console.error("Error getting now playing movies", error);
      throw error;
    }
  },

  getTopRatedMovies: async (): Promise<Movie[]> => {
    try {
      const response = await tmdbApi.get("/movie/top_rated");
      return response.data.results;
    } catch (error) {
      console.error("Error getting top rated movies", error);
      throw error;
    }
  },

  getUpcomingMovies: async (): Promise<Movie[]> => {
    try {
      const response = await tmdbApi.get("/movie/upcoming");
      return response.data.results;
    } catch (error) {
      console.error("Error getting upcoming movies", error);
      throw error;
    }
  },

  getMovieDetails: async (id: number): Promise<MovieDetails> => {
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
  ): Promise<MovieSearchResults> => {
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
