import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    
  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      {/* Create a Link component for each movie, linking to its details page */}
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));

  
  return <ul>{renderMovies}</ul>;
};

export default MoviesList;


