import SearchBar from "../components/General/SearchBar";
import Header from "../components/General/Header";
import {
  usePopularMovies,
  useNowPlayingMovies,
  useUpcomingMovies,
  useTopRatedMovies,
} from "../hooks/useFetchMovies";
import {
  NowPlayingMoviesSection,
  PopularMoviesSection,
  TopRatedMoviesSection,
  UpcomingMoviesSection,
} from "../components/Movie/MovieSectionComponents";

const HomePage = () => {
  const {
    movies: popularMovies,
    isLoading: isLoadingPopularMovies,
    error: errorPopularMovies,
    fetchMovies: fetchPopularMovies,
  } = usePopularMovies();

  const {
    movies: nowPlayingMovies,
    isLoading: isLoadingNowPlayingMovies,
    error: errorNowPlayingMovies,
    fetchMovies: fetchNowPlayingMovies,
  } = useNowPlayingMovies();

  const {
    movies: topRatedMovies,
    isLoading: isLoadingTopRatedMovies,
    error: errorTopRatedMovies,
    fetchMovies: fetchTopRatedMovies,
  } = useTopRatedMovies();

  const {
    movies: upcomingMovies,
    isLoading: isLoadingUpcomingMovies,
    error: errorUpcomingMovies,
    fetchMovies: fetchUpcomingMovies,
  } = useUpcomingMovies();

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-700 dark:text-white min-h-screen">
        <header className="bg-gray-700 mb-4 py-12">
          <div className="container mx-auto">
            <h1 className="text-white text-2xl font-bold mb-2">
              Welcome to Couch Potato!
            </h1>
            <h3 className="text-white text-xl mb-6">
              Home of The Greatest Movies of All Time!
            </h3>
            <SearchBar />
          </div>
        </header>
        <main className="container mx-auto pb-8">
          <NowPlayingMoviesSection
            movies={nowPlayingMovies}
            isLoading={isLoadingNowPlayingMovies}
            error={errorNowPlayingMovies}
            onRetry={fetchNowPlayingMovies}
          />

          <PopularMoviesSection
            movies={popularMovies}
            isLoading={isLoadingPopularMovies}
            error={errorPopularMovies}
            onRetry={fetchPopularMovies}
          />

          <TopRatedMoviesSection
            movies={topRatedMovies}
            isLoading={isLoadingTopRatedMovies}
            error={errorTopRatedMovies}
            onRetry={fetchTopRatedMovies}
          />

          <UpcomingMoviesSection
            movies={upcomingMovies}
            isLoading={isLoadingUpcomingMovies}
            error={errorUpcomingMovies}
            onRetry={fetchUpcomingMovies}
          />
        </main>
      </div>
    </>
  );
};

export default HomePage;
