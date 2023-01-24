import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type SearchType = {
  handleClose: () => void;
};

function Search({ handleClose }: SearchType) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/movies/search?query=${search}`);
    handleClose();
  }
  return (
    <div className="p-5 font-poppins bg-slate-50 absolute top-0 left-0 w-full flex gap-5">
      <form onSubmit={handleSubmit} className="flex-1">
        <input
          className="w-full px-4 py-2 bg-transparent outline-none"
          placeholder="Search something ...."
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <button onClick={handleClose}>
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default Search;
