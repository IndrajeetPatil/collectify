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

import booksImg from "../../assets/images/books.jpg";
import collectionsImg from "../../assets/images/collections.jpeg";
import moviesImg from "../../assets/images/movies.jpeg";
import paintingsImg from "../../assets/images/paintings.jpeg";

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
      className="text-center align-items-cente justify-content-between"
      width="100vw"
    >
      <Row>
        <Image
          src={collectionsImg}
          style={{ width: "100vw" }}
        />
      </Row>

      <Row className="mb-5 mt-5">
        <h1>Your Collections!</h1>
      </Row>

      <Row className="mb-5 mt-5">
        {/* Movies */}
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={moviesImg}
            />
            <Card.Body>
              <Card.Title>
                <Icon.Film /> Movies
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Number of Items</Card.Subtitle>
              <Card.Text>Collection of your favourite movies</Card.Text>
              <Link to="/collections/movies">
                <Button variant="success">To the movies!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Books */}
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={booksImg}
            />
            <Card.Body>
              <Card.Title>
                <Icon.Book /> Books
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Number of Items</Card.Subtitle>
              <Card.Text>Collection of your favourite books</Card.Text>
              <Link to="/collections/books">
                <Button variant="success">To the books!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5 mt-5">
        <Col>
          {/* Paintings */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={paintingsImg}
            />
            <Card.Body>
              <Card.Title>
                <Icon.PaintBucket /> Paintings
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Number of Items</Card.Subtitle>
              <Card.Text>Collection of your favourite paintings</Card.Text>
              <Link to="/collections/paintings">
                <Button variant="success">To the paintings!</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Collection;
