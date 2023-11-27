import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGIN_BG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_BG} alt="bg-login" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch;