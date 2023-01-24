import Movie from "./Movie";
import { MovieType } from "./movie.types";

function MovieList({ movies }: { movies: MovieType[] }) {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies?.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
