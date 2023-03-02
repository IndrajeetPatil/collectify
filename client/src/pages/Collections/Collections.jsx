import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

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

function Collection() {
  //   const { id } = useParams();
  //   const [collection, setCollection] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     async function fetchCollection() {
  //       try {
  //         const { data } = await axios.get(`/api/collections/${id}`);
  //         setCollection(data);
  //       } catch (err) {
  //         setError(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     fetchCollection();
  //   }, [id]);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Something went wrong</p>;
  //   return (
  //     <div>
  //       <h1>{collection.name}</h1>
  //       <p>{collection.description}</p>
  //     </div>
  //   );

  return (
    <Container
      fluid
      className="text-center align-items-cente justify-content-between"
      style={{ width: "100vw" }}
    >
      <Row>
        <Image
          src={collectionsImg}
          style={{ width: "100vw", height: "30rem", margin: "0rem", padding: "0rem" }}
        />
      </Row>

      <Row className="mb-5 mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>Collections of Your Favourites!</h1>
      </Row>

      <Row className="mb-5 mt-5">
        {/* Movies */}
        <Col>
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
              <Card.Subtitle className="mb-2 text-muted">Number of Items</Card.Subtitle>
              <Card.Text>
                <hr></hr>
              </Card.Text>
              <Link to="/collections/movies">
                <Button variant="success">To the movies!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Books */}
        <Col>
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
              <Card.Subtitle className="mb-2 text-muted">Number of Items</Card.Subtitle>
              <Card.Text>
                <hr></hr>
              </Card.Text>
              <Link to="/collections/books">
                <Button variant="success">To the books!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        {/* Paintings */}
        <Col>
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
              <Card.Subtitle className="mb-2 text-muted">Number of Items</Card.Subtitle>
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
        <Col>
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
              <Card.Subtitle className="mb-2 text-muted">Number of Items</Card.Subtitle>
              <Card.Text>
                <hr></hr>
              </Card.Text>
              <Link to="/collections/places">
                <Button variant="success">To the places!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Collection;
