import React, { useState, useEffect } from "react";
import itemService from "../../services/api";

import Col from "react-bootstrap/esm/Col";

import moviesImg from "../../assets/images/movies.jpeg";
import MovieCard from "./MovieCard";
import CollectionContainer from "../Collections/CollectionContainer";

import Fuse from "fuse.js";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [moviesCopy, setMoviesCopy] = useState([]);

  useEffect(() => {
    itemService
      .readItems("movies")
      .then((response) => {
        setMovies(response.data);
        return response;
      })
      .then((response) => setMoviesCopy(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterMovies = (str) => {
    const fuse = new Fuse(moviesCopy, {
      keys: ["title", "plot", "director"],
      isCaseSensitive: false,
      ignoreLocation: true,
      threshold: 0.0,
    });

    const filteredMovies = str ? fuse.search(str).map((fuseObj) => fuseObj.item) : moviesCopy;

    setMovies(filteredMovies);
  };

  const handleSearch = (e) => filterMovies(e.target.value);

  const collectionItems = movies.map((movie) => {
    return (
      <Col
        key={movie._id}
        className="m-5"
      >
        <MovieCard movie={movie} />
      </Col>
    );
  });

  return (
    <CollectionContainer
      image={moviesImg}
      collection="movies"
      category="Cinema"
      quote="Filmmaking is a chance to live many lifetimes."
      quoteAuthor="Robert Altman"
      searchHandler={handleSearch}
      collectionItems={collectionItems}
    ></CollectionContainer>
  );
}

export default MoviesList;
