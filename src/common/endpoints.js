export const API_KEY = "abb29bea88e171807e8533520836bfce";
export const trending_endpoint = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
export const movieNowPlaying_endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

export const movieDetails_endpoint = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos,images`;

export const discover_movie_by_date_endpoint = (start_date, end_date) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&primary_release_date.gte=${start_date}&primary_release_date.lte=${end_date}`;

export const search_endpoint = (query) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
