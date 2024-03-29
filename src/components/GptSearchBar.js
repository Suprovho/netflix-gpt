import React, { useRef } from "react";
import lang from "../utils/langaugeConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const SearchText = useRef(null);
  const dispatch = useDispatch();

  //? SEARCH MOVIES AND SHOWS IN TMDB

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

     const finalResult = json.results.filter((result)=>result.poster_path!=null)

    return finalResult;
  };

  const handelGptSearchClick = async () => {
    console.log(SearchText.current.value);

    // make an api call to GPT api and get Movie Results.

    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query :" +
      SearchText.current.value +
      ". only give me names of 5 movies or series , comma separated like the example result given ahead.Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //TODO: write error handling..
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); // arrays of movies..

    //search for each movie in TMDB api

    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));

    // [promise, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-full md:w-[40%]  h-auto md:bg-gradient-to-r from-gray-700 via-gray-900 to-black grid grid-cols-12  md:rounded-3xl bg-slate-950"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={SearchText}
          type="text"
          className="p-0 md:p-1 m-4 w-[95%] md:w-auto  col-span-9 outline-none md:rounded-xl rounded-sm placeholder:text-base"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-1 px-2 bg-gradient-to-r from-red-500 to-red-800 text-white rounded-md outline-none"
          onClick={handelGptSearchClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
