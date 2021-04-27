import React, { useContext } from "react";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import Footer from "../components/Footer";

import { MovieContext } from "../context/MovieContext";

const Home = () => {
  const { trendingMovies } = useContext(MovieContext);
  const { topMovies } = useContext(MovieContext);
  const { upcomingMovies } = useContext(MovieContext);

  //console.log(trendingMovies);

  return (
    <div>
      <Banner />
      <Rows title="Trending" fetchMovies={trendingMovies} />
      <Rows title="Top Rated" fetchMovies={topMovies} />
      <Rows title="Upcoming" fetchMovies={upcomingMovies} />
      <Footer />
    </div>
  );
};
export default Home;
