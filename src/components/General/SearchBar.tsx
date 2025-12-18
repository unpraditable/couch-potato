import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
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
    <form onSubmit={handleSearch} className="mb-4">
      <div className="relative">
        {!values.query && (
          <MagnifyingGlassIcon className="h-6 absolute right-2 top-2" />
        )}

        <input
          name="query"
          type="search"
          placeholder="Search movies..."
          value={values.query}
          onChange={handleChange}
          className="bg-white p-2 w-full border border-gray-400 text-gray-800"
        />
      </div>
    </form>
  );
};

export default SearchBar;
