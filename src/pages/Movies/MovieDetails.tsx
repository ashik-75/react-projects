import {
  ArrowTrendingUpIcon,
  ChevronLeftIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { gerenratePosterUrl } from "../../../utils/poster";
import MovieDetailSkl from "../../components/MovieDetailSkl";
import { fetchMovie, fetchMovieVideos } from "../../services/movie.services";
import MovieList from "./MovieList";
import MoviesSkeleton from "./MoviesSkeleton";

function MovieDetails() {
  const { movieId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["movies", movieId && parseInt(movieId)],
    enabled: movieId ? true : false,
    queryFn: () => fetchMovie(parseInt(movieId!)),
  });
  const {
    isSuccess,
    data: similarData,
    isLoading: isSimilarLoading,
  } = useQuery({
    queryKey: ["movies", parseInt(movieId!), "videos"],
    queryFn: fetchMovieVideos,
    enabled: !!movieId,
  });

  if (isLoading) {
    return <MovieDetailSkl />;
  }

  if (isError) {
    return <div>something wrong happen ...</div>;
  }

  const {
    poster_path,
    title,
    status,
    vote_average,
    vote_count,
    runtime,
    revenue,
    release_date,
    overview,
    homepage,
    original_language,
    genres,
    budget,
    popularity,
  } = data || {};

  const movieHour = function (minute: number) {
    let output = "";
    const hour = Math.floor(minute / 60);
    output += `${hour}h`;
    if (minute % 60) {
      let min = minute % 60;
      output += ` ${min}m`;
    }

    return output;
  };
  return (
    <div className="space-y-5 mb-10">
      {/* link to home page */}
      <Link
        to="/"
        className="flex px-4 py-2 items-center space-x-2 bg-slate-50 rounded w-fit"
      >
        <ChevronLeftIcon className="h-4 w-4 " />
        <span className="text-sm md:text-lg">Back to Home</span>
      </Link>

      {/* Movie Details */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="w-full h-full">
          <img
            src={gerenratePosterUrl(poster_path)}
            className="object-cover object-center rounded"
            alt="image not found"
          />
        </div>

        <div className="col-span-3 font-poppins space-y-3">
          <h1 className="font-bold text-2xl text-gray-600">{title}</h1>
          <div className="flex flex-col md:flex-row md:space-x-5">
            <p>
              <span className="font-bold text-gray-600">Release Date :</span>{" "}
              {release_date}
            </p>
            <div className="space-x-2 flex">
              <div className="font-bold text-gray-600 w-16">Genre : </div>
              <div className="gap-3 flex flex-wrap">
                {genres.map((genre: any) => (
                  <span className="bg-gray-100 px-2 py-[2px] rounded">
                    {genre?.name}
                  </span>
                ))}
              </div>
            </div>

            <p>
              <span className="font-bold text-gray-600">Duration :</span>{" "}
              {movieHour(parseInt(runtime))}
            </p>
          </div>
          {/* overview */}
          <div>
            <h2 className="font-bold text-lg text-gray-600">Overview</h2>
            <p>{overview}</p>
          </div>

          {/* status */}

          <div className="grid grid-cols-1 md:grid-cols-2 space-y-3">
            <div>
              <div className="space-x-2">
                <span className="font-bold text-gray-600 w-40 inline-block">
                  Status
                </span>
                <span>{status}</span>
              </div>

              <div className="space-x-2">
                <span className="font-bold text-gray-600 w-40 inline-block">
                  Original Language
                </span>
                <span>{original_language}</span>
              </div>
              <div className="space-x-2">
                <span className="font-bold text-gray-600 w-40 inline-block">
                  Budget
                </span>
                <span>${budget}</span>
              </div>
              <div className="space-x-2">
                <span className="font-bold text-gray-600 w-40 inline-block">
                  Revenue
                </span>
                <span>${revenue}</span>
              </div>
            </div>
            {/* rating */}
            <div className="grid grid-cols-2">
              <div>
                <p className="uppercase font-semibold text-gray-600">Rating</p>
                <div className="flex gap-2 items-center">
                  <StarIcon className="h-7 2-7 text-yellow-400" />
                  <div>
                    <p>
                      {" "}
                      <span className="font-bold">{vote_average}</span>
                      <span>/10</span>{" "}
                    </p>

                    <p>{vote_count}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="uppercase font-semibold text-gray-600">
                  Popularity
                </p>
                <div className="flex gap-2 items-center">
                  <ArrowTrendingUpIcon className="h-7 2-7 text-green-600" />
                  <div>
                    <p>
                      <span className="font-bold">{popularity}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* link */}
          <div>
            <a
              className="underline underline-offset-2 font-semibold text-slate-700"
              href={homepage}
              target="_blank"
            >
              View Here
            </a>
          </div>
        </div>
      </div>

      {/* Related movies */}
      {isSimilarLoading ? (
        <MoviesSkeleton />
      ) : (
        isSuccess &&
        similarData?.results?.length > 0 && (
          <div className="space-y-5">
            <div className="">
              <h1 className="font-bold capitalize text-2xl font-poppins text-gray-600">
                Related Movies
              </h1>
            </div>
            <MovieList movies={similarData?.results?.slice(0, 10)} />
          </div>
        )
      )}
    </div>
  );
}

export default MovieDetails;
