import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
interface SearchForm {
  query: string;
}

const SearchBar = () => {
  const navigate = useNavigate();

  const { values, handleChange } = useForm<SearchForm>({
    query: "",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.query.trim()) {
      return;
    }
    navigate(`/search/movie?q=${encodeURIComponent(values.query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex items-center">
      <div className="relative flex-1">
        <input
          name="query"
          type="search"
          placeholder="Search movies..."
          value={values.query}
          onChange={handleChange}
          className="bg-white p-2 w-full border border-gray-400 text-gray-800"
          aria-label="Search movies"
        />
      </div>

      <button
        type="submit"
        className="ml-2 p-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        name="Submit Search"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
