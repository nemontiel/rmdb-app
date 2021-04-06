const base_url = "https://api.themoviedb.org/3/";
const api_key = "api_key=af22f782f0320d8121a524a3bb0789d7";

const trending_movies = "trending/movie/week?";
const top_movies = "movie/top_rated?";
const upcoming_movies = "movie/upcoming?";

export const trendingMoviesGet = () =>
  `${base_url}${trending_movies}${api_key}`;

export const topMoviesGet = () => `${base_url}${top_movies}${api_key}`;

export const upcomingMoviesGet = () =>
  `${base_url}${upcoming_movies}${api_key}`;
