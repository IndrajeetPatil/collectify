import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";

import * as Icon from "react-bootstrap-icons";

import booksImg from "../../assets/images/books.jpeg";
import collectionsImg from "../../assets/images/collections.jpeg";
import moviesImg from "../../assets/images/movies.jpeg";
import paintingsImg from "../../assets/images/paintings.jpeg";
import placesImg from "../../assets/images/places.jpeg";
import songsImg from "../../assets/images/songs.jpeg";
import photosImg from "../../assets/images/photos.jpeg";

import apiService from "../../services/api.service";

function CollectionsList() {
  const [collections, setCollections] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCollection = () => {
    apiService
      .getCollections()
      .then((response) => {
        setCollections(response.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <Container
      fluid
      className="text-center"
    >
      <Row>
        <Image
          src={collectionsImg}
          style={{ height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>Collections of Your Favourites!</h1>
      </Row>

      <Row>
        <hr></hr>
      </Row>

      <Row>
        {/* Books */}
        <Col className="g-5 m-5">
          <Card style={{ width: "20rem", height: "25rem", backgroundColor: "#F7F1E5" }}>
            <Card.Img
              variant="top"
              src={booksImg}
              style={{ height: "15rem" }}
            />
            <Card.Body>
              <Card.Title>
                <Icon.Book /> Books
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{collections.books.length} Items</Card.Subtitle>
              <Card.Text>
                <hr></hr>
              </Card.Text>
              <Link to="/collections/books">
                <Button variant="success">To the books!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Movies */}
        <Col className="g-5 m-5">
          <Card style={{ width: "20rem", height: "25rem", backgroundColor: "#F7F1E5" }}>
            <Card.Img
              variant="top"
              src={moviesImg}
              style={{ height: "15rem" }}
            />
            <Card.Body>
              <Card.Title>
                <Icon.Film /> Movies
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{collections.movies.length} Items</Card.Subtitle>
              <Card.Text>
                <hr></hr>
              </Card.Text>
              <Link to="/collections/movies">
                <Button variant="success">To the movies!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Paintings */}
        <Col className="g-5 m-5">
          <Card style={{ width: "20rem", height: "25rem", backgroundColor: "#F7F1E5" }}>
            <Card.Img
              variant="top"
              src={paintingsImg}
              style={{ height: "15rem" }}
            />
            <Card.Body>
              <Card.Title>
                <Icon.PaintBucket /> Paintings
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{collections.paintings.length} Items</Card.Subtitle>
              <Card.Text>
                <hr></hr>
              </Card.Text>
              <Link to="/collections/paintings">
                <Button variant="success">To the paintings!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Places */}
        <Col className="g-5 m-5">
          <Card style={{ width: "20rem", height: "25rem", backgroundColor: "#F7F1E5" }}>
            <Card.Img
              variant="top"
              src={placesImg}
              style={{ height: "15rem" }}
            />
            <Card.Body>
              <Card.Title>
                <Icon.GeoAltFill /> Places
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{collections.places.length} Items</Card.Subtitle>
              <Card.Text>
                <hr></hr>
              </Card.Text>
              <Link to="/collections/places">
                <Button variant="success">To the places!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* songs */}
        <Col className="g-5 m-5">
          <Card style={{ width: "20rem", height: "25rem", backgroundColor: "#F7F1E5" }}>
            <Card.Img
              variant="top"
              src={songsImg}
              style={{ height: "15rem" }}
            />
            <Card.Body>
              <Card.Title>
                <Icon.MusicNoteList /> Songs
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{collections.songs.length} Items</Card.Subtitle>
              <Card.Text>
                <hr></hr>
              </Card.Text>
              <Link to="/collections/songs">
                <Button variant="success">To the songs!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* photos */}
        <Col className="g-5 m-5">
          <Card style={{ width: "20rem", height: "25rem", backgroundColor: "#F7F1E5" }}>
            <Card.Img
              variant="top"
              src={photosImg}
              style={{ height: "15rem" }}
            />
            <Card.Body>
              <Card.Title>
                <Icon.CameraFill /> Photos
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{collections.photos.length} Items</Card.Subtitle>
              <Card.Text>
                <hr></hr>
              </Card.Text>
              <Link to="/collections/photos">
                <Button variant="success">To the photos!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CollectionsList;
