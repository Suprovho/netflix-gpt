import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const Movicard = ({ posterPath }) => {
  return (
    <div className="w-44 hover:scale-110 transition  duration-500 cursor-pointer object-cover rounded-sm">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" className="rounded-sm"></img>
    </div>
  );
};

export default Movicard;
