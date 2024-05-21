import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} name={movie.name} year={movie.year} rating={movie.rating} />
      ))}
    </div>
  );
};

export default MovieList;
