const key = "b864edeba70eade29814892d86d862ad";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=de-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=de-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=de-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=de-US&page=1`,
  requestTopSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=de-US&page=1`,
};

export default requests;
