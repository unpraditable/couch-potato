import { favoritesStore } from "../stores/favoriteStore";

export const useFavorites = () => {
  const userId = favoritesStore((store) => store.userId);
  const favoritesByUser = favoritesStore((store) => store.favoritesByUser);

  const favorites = userId ? (favoritesByUser[userId] ?? []) : [];

  const addFavorite = favoritesStore((store) => store.addFavorite);
  const removeFavorite = favoritesStore((store) => store.removeFavorite);

  const isFavorite = (movieId: number) =>
    favorites.some((movie) => movie.id === movieId);

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
  };
};
