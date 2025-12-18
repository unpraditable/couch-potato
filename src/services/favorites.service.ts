import type { Movie } from "../types/Movie";

const FAVORITES_KEY = "favorite_movies";

export const favoritesService = {
  getFavorites: (): Movie[] => {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveFavorites: (movies: Movie[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(movies));
  },
};
