import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import movieSlice, { addTrailerVideo } from "../state-management/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id);
  const trailer = useSelector((store) => store.movies.trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen  aspect-video "
        src={"https://www.youtube.com/embed/" + trailer?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
