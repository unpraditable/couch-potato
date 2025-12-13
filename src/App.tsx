import "./App.css";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./pages/Movie/MovieDetails";
import SearchPage from "./pages/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/search/movie" element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
