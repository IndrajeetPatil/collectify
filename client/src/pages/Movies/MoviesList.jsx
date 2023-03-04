import React, { useState, useEffect } from "react";
import movieService from "../../services/movie";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";

import moviesImg from "../../assets/images/movies.jpeg";
import MovieCard from "./MovieCard";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService
      .getMovies()
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container
      fluid
      className="text-center"
    >
      <Row>
        <Image
          src={moviesImg}
          style={{ height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>Your Favourite Movies!</h1>
      </Row>

      <Row>
        <hr></hr>
      </Row>

      <Row className="mt-5">
        {movies.map((movie) => {
          return (
            <Col
              key={movie._id}
              className="m-5"
            >
              <MovieCard movie={movie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MoviesList;
