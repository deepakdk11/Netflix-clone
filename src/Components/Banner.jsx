import axios from '../API/axios'
import React, { useEffect, useState } from 'react'
import request from '../API/request'

const Banner = () => {

  const [movies, setmovies] = useState([])
    
  useEffect(() => {
        const fetchData = async () => {
            const fetchMovies = await axios.get(request.fetchNetflixOriginals)
            setmovies(
              fetchMovies.data.results[
                Math.floor(Math.random() * fetchMovies.data.results.length - 1)
              ]
            );
            return fetchMovies;
        }
        fetchData();
  }, [])

  console.log(movies);
  

  const trim = (string, n) => {
    return string?.length > n ? string.substr(0, n -1) + '...' : string
  }

  return (
    <div
      className="h-48 pl-5 pt-10 bg-cover bg-center md:h-screen  flex flex-col justify-center md:pl-16 md:pt-40"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,
      }}
    >
    <h1 className='pb-1 text-base md:text-5xl font-extrabold md:mb-5'>{movies?.title ||  movies?.original_name || movies?.name}</h1>
    <p className='text-xs md:text-base md:w-1/3'>{trim(movies?.overview,150)}</p>
    <div className='mt-1 md:mt-5 flex'>
      <button className='bg-white text-black rounded-md h-fit py-2 px-4 text-xs md:text-base font-medium flex md:py-[10.224px] md:pl-[25.560px] md:pr-[30.672px] justify-between items-center mr-3'>
        <svg className='mr-2 size-3 md:size-6' xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="PlayStandard" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
        Play</button>
      <button className='rounded-md h-fit py-2 bg-grey px-4 text-xs md:text-base font-medium flex md:py-[10.224px] md:pl-[25.560px] md:pr-[30.672px] justify-between items-center'>
        <svg className='mr-2 size-3 md:size-6' xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="CircleIStandard" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
        More Info
      </button>
    </div>
    <div className='fixed h-screen bg-[linear-gradient(77deg,rgba(0,0,0,.6),transparent85%)]'></div>
    </div>
  )
}

export default Banner
