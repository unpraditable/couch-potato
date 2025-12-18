import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Movie } from "../types/Movie";

interface FavoritesState {
  favoritesByUser: Record<string, Movie[]>;
  userId: string | null;

  setUser: (userId: string | null) => void;
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: number) => void;
  getFavorites: () => Movie[];
}

export const favoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoritesByUser: {},
      userId: null,

      setUser: (userId) => {
        set({ userId });
      },

      getFavorites: () => {
        const { userId, favoritesByUser } = get();
        if (!userId) return [];
        return favoritesByUser[userId] || [];
      },

      addFavorite: (movie) => {
        const { userId, favoritesByUser } = get();
        if (!userId) return;

        const userFavorites = favoritesByUser[userId] || [];

        if (userFavorites.some((m) => m.id === movie.id)) return;

        set({
          favoritesByUser: {
            ...favoritesByUser,
            [userId]: [...userFavorites, movie],
          },
        });
      },

      removeFavorite: (movieId) => {
        const { userId, favoritesByUser } = get();
        if (!userId) return;

        set({
          favoritesByUser: {
            ...favoritesByUser,
            [userId]: favoritesByUser[userId]?.filter(
              (movie) => movie.id !== movieId
            ),
          },
        });
      },
    }),
    {
      name: "favorites_store",
      partialize: (state) => ({
        favoritesByUser: state.favoritesByUser,
        userId: state.userId,
      }),
    }
  )
);
