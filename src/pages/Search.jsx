import React, { useState } from "react";

import "./Search.styles.css";
import ResultContainer from "../components/ResultContainer";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

export const Search = () => {
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
                <Link to={`/movie/${movie?.id}`}>
                  <li key={movie.id}>
                    <ResultContainer movie={movie} />
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
export default Search;
