import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  // Call useParams to access the `params` from the URL
  const params = useParams();
  
  // Ensure the movieId exists in the params object before accessing it
  const selectedMovie = movies[params.movieId];

  // Return null if the selected movie doesn't exist
  if (!selectedMovie) {
    return <div>No movie found with the provided ID</div>;
  }

  return (
    <div>
      {/* Render information about the selected movie */}
      <h3>{selectedMovie.title}</h3>
      {/* Add more details as needed */}
    </div>
  );
}

export default MovieShow;
