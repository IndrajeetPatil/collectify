import React, { useState, useEffect } from "react";
import movieService from "../../services/movie";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import moviesImg from "../../assets/images/movies.jpeg";
import MovieCard from "./MovieCard";

import Fuse from "fuse.js";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [moviesCopy, setMoviesCopy] = useState([]);

  useEffect(() => {
    movieService
      .getMovies()
      .then((response) => {
        setMovies(response.data);
        return response;
      })
      .then((response) => setMoviesCopy(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterMovies = (str) => {
    const fuse = new Fuse(moviesCopy, {
      keys: ["title"],
      isCaseSensitive: false,
      ignoreLocation: true,
      threshold: 0.0,
    });

    const filteredMovies = str ? fuse.search(str).map((fuseObj) => fuseObj.item) : moviesCopy;

    setMovies(filteredMovies);
  };

  const handleSearch = (e) => filterMovies(e.target.value);

  return (
    <Container
      fluid
      style={{ width: "100vw" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Row>
        <Image
          src={moviesImg}
          style={{ width: "100vw", height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="text-center mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>Your Favourite Movies!</h1>
      </Row>

      <Row>
        <hr style={{ width: "50vw" }}></hr>
      </Row>

      <Row className="mt-5">
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
        <Col>
          <Form
            style={{ width: "50vw" }}
            className="d-flex text-center"
          >
            <Form.Control
              type="search"
              placeholder="Search by movie title"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
          </Form>
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
