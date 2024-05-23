import { API_OPTIONS } from "../utils/constants";
import movieSlice, { addTrailerVideo } from "../state-management/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useMovieTrailer=(movie_id)=>{
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movie_id +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter((data, i) => {
          return data.type == "Trailer";
        });
        const movieTrailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(movieTrailer));
      };
    
      useEffect(() => {
        getMovieVideo();
      }, []);
}

export default useMovieTrailer;


