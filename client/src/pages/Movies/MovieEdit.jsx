import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieEdit() {
  //   const { id } = useParams();
  //   const [movie, setMovie] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     // Fetch a single movie from the backend
  //     async function fetchMovie() {
  //       try {
  //         const response = await axios.get(`/api/movies/${id}`);
  //         setMovie(response.data);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     fetchMovie();
  //   }, [id]);

  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Something went wrong: {error.message}</div>;
  //   if (!movie) return <div>Movie not found</div>;

  //   return (
  //     <div>
  //       <h1>Movie Edit</h1>
  //       <MovieForm movie={movie} />
  //     </div>
  //   );
  return <h1>This is movie edit form.</h1>;
}

export default MovieEdit;
