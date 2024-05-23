import React from "react";
import MovieList from "./MovieList";
import { useDispatch, useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className="bg-black w-full">
     <div className="-mt-52relative z-20">
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      
     </div>
      
    </div>
    )
  );
};

export default SecondaryContainer;
