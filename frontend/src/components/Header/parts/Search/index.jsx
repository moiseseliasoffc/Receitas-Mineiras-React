import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import "./styles.search.scss";

export function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = event => {
    event.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      navigate(`/search?q=${trimmedQuery}`);
    }
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Pesquisar"
        value={query}
        onChange={e => setQuery(e.target.value)} // Atualiza o estado conforme o input muda
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
