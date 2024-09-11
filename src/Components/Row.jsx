import axios from "../API/axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const fetchMovies = await axios.get(fetchUrl);
      setMovies(fetchMovies.data.results);
      return fetchMovies;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="py-5 px-5">
      <h1 className="pl-5 pb-2 font-medium text-lg">{title}</h1>
      <div className="flex overflow-y-hidden overflow-x-scroll no-scrollbar px-5 ">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                key={movie.id}
                src={`${base_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
                className={isLarge? "h-28  md:h-44 object-contain mr-5 w-full cursor-pointer  transition-all hover:scale-110 hover:opacity-100" : " h-24 md:h-40 cursor-pointer object-contain mr-5 w-full  transition-all hover:scale-110 hover:opacity-100"}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
