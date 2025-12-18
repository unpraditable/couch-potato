import Header from "../../components/General/Header";
import MovieCard from "../../components/Movie/MovieCard";
import { useFavorites } from "../../hooks/useFavorites";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorite movies yet.</p>;
  }

  return (
    <>
      <Header />

      <section className="bg-white dark:bg-gray-700 dark:text-white min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-xl text-center mb-6 font-bold">
            Your Favorite Movies
          </h2>

          <>
            <ul className="grid grid-cols-2 gap-4 justify-items-center sm:grid-cols-4 lg:grid-cols-5">
              {favorites.map((favorite) => (
                <MovieCard key={favorite.id} movie={favorite} />
              ))}
            </ul>
          </>
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
