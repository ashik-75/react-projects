import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "../../services/movie.services";
import MovieList from "./MovieList";
import MoviesSkeleton from "./MoviesSkeleton";

function SearchMovieList() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("query");

  const { data, isLoading } = useQuery({
    queryKey: ["movies", searchValue],
    queryFn: fetchSearchMovies,
  });

  if (isLoading) {
    return <MoviesSkeleton />;
  }
  return (
    <div className="mb-10">
      <div className="my-10">
        <h1 className="text-xl font-poppins font-bold text-gray-600">
          Search For : {searchValue}
        </h1>
      </div>
      <MovieList movies={data.results} />
    </div>
  );
}

export default SearchMovieList;
