import { useEffect } from "react";
import {addTrendingMovies} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useTrendingMovies= () => {
  // * fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const TrendingMovies=useSelector((store)=>store.movies.TrendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
   !TrendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
