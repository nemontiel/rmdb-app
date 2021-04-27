import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Rows.styles.css";

function Rows({ title, fetchMovies }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {fetchMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

Rows.propTypes = {
  title: PropTypes.string,
  fetchMovies: PropTypes.array.isRequired,
};
export default Rows;
