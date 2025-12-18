import type { Movie } from "../types/Movie";

const FAVORITES_KEY = "favorite_movies";

export const favoritesService = {
  getFavorites: (): Movie[] => {
    const data = localStorage.getItem(FAVORITES_KEY);
    if (!data) return [];

    try {
      return JSON.parse(data) as Movie[];
    } catch {
      return [];
    }
  },

  saveFavorites: (movies: Movie[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(movies));
  },
};
