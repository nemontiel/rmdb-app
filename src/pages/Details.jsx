import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Details.styles.css";
import PropTypes from "prop-types";

function MovieDetails({ match }) {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=af22f782f0320d8121a524a3bb0789d7&language=en-US`
        )
        .then((response) => {
          //console.log(response.data);
          setMovie(response.data);
        });
    };

    const fetchCredits = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=af22f782f0320d8121a524a3bb0789d7&language=en-US`
        )
        .then((response) => {
          //console.log(response.data);
          //console.log(response.data.cast);
          setCredits(response.data.cast);
        });
    };
    fetchMovie();
    fetchCredits();
  }, [match.params.id]);

  return (
    <div className="details__page">
      <div
        className="details__banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "center top",
          height: "50vh",
        }}
      >
        <div className="general">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
            style={{ height: 200, width: 150 }}
          />
          <h1>{movie.title}</h1>
          <h5>{movie.original_title} (Original Title)</h5>
          <h4>Rating: {movie.vote_average}</h4>
          <h3>{movie.overview}</h3>
        </div>
      </div>

      <div className="details">
        <div className="cast__container">
          <h2>Cast</h2>
          <div className="cast__image">
            {credits.map((actor) => (
              <div>
                <img
                  key={actor.id}
                  className="cast__slide"
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  alt={actor.name}
                  style={{ height: 200, width: "auto" }}
                />
                <h6>{actor.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  match: PropTypes.object,
};

export default MovieDetails;
