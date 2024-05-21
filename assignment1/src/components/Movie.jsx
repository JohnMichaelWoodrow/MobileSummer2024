import React from 'react';

const Movie = ({ name, year, rating }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Movie;
