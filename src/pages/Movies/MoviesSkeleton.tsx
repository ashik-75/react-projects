import MovieSkl from "./MovieSkl";

function MoviesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <MovieSkl />
      <MovieSkl />
      <MovieSkl />
      <MovieSkl />
      <MovieSkl />
      <MovieSkl />
    </div>
  );
}

export default MoviesSkeleton;
