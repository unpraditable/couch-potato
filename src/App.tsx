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

function App() {
  const { isAuthenticated } = useAuth();

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

          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/movie/:id"
            element={
              <PrivateRoute>
                <MovieDetailsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/search/movie"
            element={
              <PrivateRoute>
                <SearchPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
