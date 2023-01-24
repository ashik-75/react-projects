import axios from "axios";

export async function fetchMovies(params: any) {
  const { queryKey, pageParam = 1 } = params;
  const category = queryKey?.[1];
  const URL = `https://api.themoviedb.org/3/${
    category === "trending" ? "trending/movie/week" : "movie/" + category
  }?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=${pageParam}`;

  const data = await axios.get(URL);

  return data.data;
}

export async function fetchMovie(movieId: number) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;

  const response = await axios.get(url);

  return response.data;
}

export async function fetchSearchMovies({ queryKey }: { queryKey: any[] }) {
  console.log({ queryKey });
  const info = queryKey?.[1];
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&query=${info}&page=1`;

  const response = await axios.get(url);

  return response.data;
}

export async function fetchMovieVideos({ queryKey }: { queryKey: any[] }) {
  const movieId = queryKey?.[1];
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;

  const response = await axios.get(url);

  return response.data;
}
