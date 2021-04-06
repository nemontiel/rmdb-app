import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import "./ResultContainer.styles.css";

export const ResultContainer = ({ movie }) => {
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>
      </div>
    </div>
  );
};

ResultContainer.propTypes = {
  movie: PropTypes.object,
};
export default ResultContainer;
