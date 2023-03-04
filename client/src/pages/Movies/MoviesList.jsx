import React, { useState, useEffect } from "react";
import movieService from "../../services/movie";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
      className="d-flex flex-column"
    >
      <Row>
        <Image
          src={moviesImg}
          style={{ height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="text-center mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>Your Favourite Movies!</h1>
      </Row>

      <Row>
        <hr></hr>
      </Row>

      <Row className="ms-auto me-auto mt-5">
        <Col>
          <Card style={{ width: "50vw" }}>
            <Card.Header>Collection: Cinema</Card.Header>
            <Card.Body>
              <Card.Title>"Filmmaking is a chance to live many lifetimes."</Card.Title>
              <Card.Text>- Robert Altman</Card.Text>
              <Link to={"/collections/movies/create"}>
                <Button variant="primary">Add a movie</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
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
