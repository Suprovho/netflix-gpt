import React from 'react'
import lang from '../utils/langaugeConstant'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-[40%] h-auto bg-black grid grid-cols-12 rounded-lg'>
        <input 
          type='text' 
          className="p-2 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-500 text-white rounded-lg'>{lang[langKey].Search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar