import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () => {
  // * fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const popularMovies=useSelector((store)=>store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
  !popularMovies &&  getPopularMovies();
  }, []);
};

export default usePopularMovies;
