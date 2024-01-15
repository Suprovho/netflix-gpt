import React from "react";
import { IMG_CDN_URL } from "../utils/constants";




//!IMG_CDN_URL + posterPath
const Movicard = ({ posterPath, title, rating, original_name, movieId,overview }) => {
  if (!posterPath) return null;
  return (
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 m-1 rounded-sm object-cover flex z-10">
      <div class="h-auto">
        <img
          class="h-auto  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={IMG_CDN_URL + posterPath}
          alt=""
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h2 class="mb-3 text-xl font-bold italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
          {title == null ? original_name : title}
        </h2>
        <p className="text-orange-400 text-base font-sans mb-4 underline underline-offset-8">
          Rating : {rating}
        </p>
        
      </div>
    </div>
  );
};

export default Movicard;
