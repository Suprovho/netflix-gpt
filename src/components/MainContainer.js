import React from "react";
import { useSelector } from "react-redux";
import VidBg from "./VidBg";
import VidTitle from "./VidTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) {
    return; // !early return
  }

  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies;

  return (
    <div>
      <VidTitle title={original_title} overview={overview} />
      <VidBg movieId={id} />
    </div>
  );
};

export default MainContainer;
