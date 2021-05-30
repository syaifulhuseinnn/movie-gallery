export const filterPosterNull = (movies) =>
  movies.filter((movie) => movie.poster_path !== null);

export const filterBackdropNull = (movies) =>
  movies.filter((movie) => movie.backdrop_path !== null);
