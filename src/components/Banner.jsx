import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import "./Banner.styles.css";
function Banner() {
  const { trendingMovies } = useContext(MovieContext);
  //console.log(trendingMovies);

  const movie =
    trendingMovies[Math.floor(Math.random() * trendingMovies.length)];
  //console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center top",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.orignal_name}</h1>

        <div className="banner__buttons">
          <Link to={`/${movie?.id}`}>
            <button className="banner__button">Details</button>
          </Link>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}
export default Banner;
