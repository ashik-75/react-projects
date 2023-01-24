export function gerenratePosterUrl(posterPath: string) {
  const base_path = `https://www.themoviedb.org/t/p/w300_and_h450_face/${posterPath}`;
  return base_path;
}
