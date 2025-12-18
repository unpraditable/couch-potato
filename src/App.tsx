import "./App.css";
import HomePage from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MovieDetailsPage from "./pages/Movie/MovieDetails";
import SearchPage from "./pages/Search";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/General/PrivateRoute";
import FavoritesPage from "./pages/Movie/Favorites";
import { useSyncFavoritesUser } from "./hooks/useSyncFavorites";

function App() {
  const { isAuthenticated } = useAuth();
  useSyncFavoritesUser();

  const protectedRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/movie/:id", element: <MovieDetailsPage /> },
    { path: "/search/movie", element: <SearchPage /> },
    { path: "/favorites", element: <FavoritesPage /> },
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/" /> : <Register />}
          />

          <Route element={<PrivateRoute />}>
            {protectedRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
