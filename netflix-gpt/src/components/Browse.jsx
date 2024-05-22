import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import {addNowPlayingMovies} from "../state-management/movieSlice";
import { useDispatch } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
const Browse = () => {
useNowPlayingMovies();
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Browse;
