import React, { useState } from "react";

import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./SearchBar.styles.css";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=af22f782f0320d8121a524a3bb0789d7&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="wrapper">
      <div className="search__input">
        <input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={onChange}
        />
        <div className="autocom__box">
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <Link to={`/${movie?.id}`}>
                  <li key={movie.id}>
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
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
