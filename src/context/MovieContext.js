import React, { createContext, useState, useEffect } from "react";
import {
  trendingMoviesGet,
  topMoviesGet,
  upcomingMoviesGet,
} from "../constants";

import axios from "axios";
export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => getTrendingMovies(), []);
  useEffect(() => getTopMovies(), []);
  useEffect(() => getUpcomingMovies(), []);

  const getTrendingMovies = async () => {
    await axios
      .get(trendingMoviesGet())
      .then((res) => {
        //console.log(res.data.results);
        setTrendingMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getTopMovies = async () => {
    await axios
      .get(topMoviesGet())
      .then((res) => {
        setTopMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getUpcomingMovies = async () => {
    await axios
      .get(upcomingMoviesGet())
      .then((res) => {
        setUpcomingMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <MovieContext.Provider
      value={{ trendingMovies, topMovies, upcomingMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
