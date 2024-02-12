import React from 'react';
import { useParams } from 'react-router-dom';

const MovieShow = ({ movies }) => {
  const params = useParams();
  const selectedMovie = movies[params.movieId];

  if (!selectedMovie) {
    return <div>No movie found with the provided ID</div>;
  }

  return (
    <div>
      <h3>{selectedMovie.title}</h3>
      <p>Director: {selectedMovie.director}</p>
      <p>Release Year: {selectedMovie.year}</p>
      <p>Genres: {selectedMovie.genres.join(', ')}</p>
      {/* Add more details here as needed */}
    </div>
  );
};

export default MovieShow;

