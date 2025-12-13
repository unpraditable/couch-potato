import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/movie?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };
  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="relative">
        {!searchQuery && (
          <MagnifyingGlassIcon className="h-6 absolute right-2 top-2" />
        )}

        <input
          type="search"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white p-2 w-full text-gray-800"
        />
      </div>
    </form>
  );
};

export default SearchBar;
