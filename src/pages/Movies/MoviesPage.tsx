import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchMovies } from "../../services/movie.services";
import MovieList from "./MovieList";
import MoviesSkeleton from "./MoviesSkeleton";

function MoviesPage() {
  const [category, setCategory] = useState("trending");
  const {
    data,
    fetchNextPage,
    isFetching,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", category],
    queryFn: fetchMovies,
    getNextPageParam: (latestPage, pages) => {
      return latestPage?.page ? latestPage.page + 1 : undefined;
    },
  });

  if (isLoading) {
    return <MoviesSkeleton />;
  }

  const movies = data?.pages?.flatMap((x) => x?.results ?? x);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center my-5">
        <select
          value={category}
          name="category"
          id=""
          onChange={(e) => setCategory(e.target.value)}
          className="px-8 py-2 font-poppins outline-none bg-slate-100 text-xl  border-r-[16px] border-solid border-transparent"
        >
          <option value="trending">Trending</option>
          <option value="popular">Popular</option>
          <option value="latest">Latest</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Up Coming</option>
        </select>
      </div>

      <div className="font-poppins">
        <h1 className="font-bold text-xl text-center text-gray-600 capitalize">
          {category?.replace("_", " ")} Movies
        </h1>
      </div>
      <MovieList movies={movies!} />

      {/* Load more button */}

      <div className="my-10 text-center">
        <button
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => fetchNextPage()}
          className="font-poppins px-4 py-2 bg-pink-500 disabled:bg-pink-200 disabled:cursor-not-allowed text-white shadow font-bold rounded"
        >
          {isFetching ? "Processing ..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default MoviesPage;
