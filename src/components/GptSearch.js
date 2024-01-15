import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGIN_BG } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10 overflow-hidden">
        <img src={LOGIN_BG} alt="bg-login" className='md:blur-sm h-screen object-cover md:h-auto md:object-contain' />
      </div>
    <div className='pt-[49%]  md:p-0'>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>
  )
}

export default GptSearch;