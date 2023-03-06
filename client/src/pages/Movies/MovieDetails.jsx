import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import itemService from "../../services/api";

import * as Icon from "react-bootstrap-icons";
import placeholderPosterImg from "../../assets/images/poster-placeholder.jpg";

function MovieDetails() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    itemService
      .readItem(movieId, "movies")
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <Container
      fluid
      style={{ width: "100vw" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Row className="mt-5">
        <Col>
          <img
            src={movie.poster || placeholderPosterImg}
            alt="movie poster"
            style={{ width: "30vw", height: "70vh" }}
          ></img>
        </Col>
        <Col>
          <Card style={{ width: "50vw", height: "70vh" }}>
            <Card.Body>
              <Card.Title className="fs-2 text-center">{movie.title}</Card.Title>
              <p>
                <strong>Year</strong>: {movie.year}
              </p>
              <p>
                <strong>Genre</strong>: {movie.genre}
              </p>
              <p>
                <strong>Director</strong>: {movie.director}
              </p>
              <p>
                <strong>Plot</strong>: {movie.plot}
              </p>
              <p>
                <strong>URL</strong>: {movie.url}
              </p>
            </Card.Body>

            <Card.Footer>
              <Container
                fluid
                className="d-flex flex-row align-content-center justify-content-around fs-4"
              >
                <Link to={`/collections/movies/edit/${movie._id}`}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Edit details</Tooltip>}
                  >
                    <Icon.Pencil style={{ color: "green" }} />
                  </OverlayTrigger>
                </Link>

                <Link to={`/collections/movies/delete/${movie._id}`}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Delete this item</Tooltip>}
                  >
                    <Icon.Trash style={{ color: "red" }} />
                  </OverlayTrigger>
                </Link>
              </Container>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Button
            variant="primary"
            onClick={() => navigate("/collections/movies")}
          >
            Back to Movies
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
