import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { gerenratePosterUrl } from "../../../utils/poster";
import { MovieType } from "./movie.types";

function Movie({
  poster_path,
  title,
  vote_average,
  vote_count,
  original_language,
  id,
}: MovieType) {
  return (
    <div className="relative">
      <Link to={`/movies/${id}`}>
        <div className="bg-slate-100 p-5 space-y-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all hover:animate-pulse">
          <div className="w-full h-[397px] bg-gray-200 rounded-xl">
            <img
              src={gerenratePosterUrl(poster_path)}
              alt="no image found"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div>
            <div className="font-bold font-poppins text-xl text-gray-600 line-clamp-1">
              {title}
            </div>

            <div className="font-poppins absolute top-10 left-10 rounded px-2 bg-slate-400/40 backdrop-blur-md flex gap-2 items-center py-1">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              {vote_average}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
