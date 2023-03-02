import React, { useState, useEffect } from "react";

function MoviesList() {
  //   const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     async function fetchMovies() {
  //       const response = await fetch("http://localhost:5000/movies");
  //       const movies = await response.json();
  //       setMovies(movies);
  //     }
  //     fetchMovies();
  //   }, []);
  //   return (
  //     <div>
  //       <h1>Movies List</h1>
  //       <ul>
  //         {movies.map((movie) => (
  //           <li key={movie.id}>{movie.title}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  return <h1>This is a movie list.</h1>;
}

export default MoviesList;
