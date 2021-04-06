import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Details.styles.css";
import PropTypes from "prop-types";

function MovieDetails({ match }) {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);

  useEffect(
    () => {
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
    } /*[match.params.id]*/
  );

  return (
    <div>
      <div
        className="details__banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "center top",
          height: "448px",
        }}
      ></div>

      <div className="details">
        <h1>{movie.title}</h1>
        <h5>{movie.original_title} (Original Title)</h5>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="poster"
          style={{ height: 200, width: 150 }}
        />
        <h1>Rating: {movie.vote_average}</h1>
        <h3>{movie.overview}</h3>
        <div className="cast__container">
          <h2>Cast</h2>
          <div className="cast__image">
            {credits.map((actor) => (
              <img
                key={actor.id}
                className="cast__slide"
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
              />
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
