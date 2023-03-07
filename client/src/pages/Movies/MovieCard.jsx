import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import placeholderPosterImg from "../../assets/images/movie-poster-placeholder.jpg";
import Container from "react-bootstrap/esm/Container";

function MovieCard(props) {
  return (
    <Card
      className="text-center shadow"
      style={{ width: "19rem", height: "25rem" }} // Golden ratio: 1.61
    >
      <Card.Img
        variant="top"
        style={{ height: "15rem" }}
        src={props.movie.poster || placeholderPosterImg}
        alt="Movie Poster"
      />

      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.movie.year}</Card.Subtitle>

        <Card.Text>{props.movie.genre}</Card.Text>
      </Card.Body>

      <Card.Footer>
        <Container
          fluid
          className="d-flex flex-row align-content-center justify-content-around fs-5"
        >
          <Link to={`/collections/movies/${props.movie._id}`}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-top">See more details</Tooltip>}
            >
              <Icon.EyeFill style={{ color: "#0d6efd" }} />
            </OverlayTrigger>
          </Link>

          <Link to={`/collections/movies/edit/${props.movie._id}`}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-top">Edit details</Tooltip>}
            >
              <Icon.Pencil style={{ color: "green" }} />
            </OverlayTrigger>
          </Link>

          <Link to={`/collections/movies/delete/${props.movie._id}`}>
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
  );
}

export default MovieCard;
