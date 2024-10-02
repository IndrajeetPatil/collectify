import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { MDBBadge } from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import placeholderPosterImg from "../../assets/images/movie-poster-placeholder.jpg";
import Container from "react-bootstrap/esm/Container";

function MovieCard({ movie }) {
  const genreToBadgeColor = (genre) => {
    switch (genre) {
      case "Action":
        return "success";
      case "Comedy":
        return "info";
      case "Drama":
        return "primary";
      case "Horror":
        return "warning";
      case "Romance":
        return "danger";
      case "Thriller":
        return "secondary";
      default:
        return "dark";
    }
  };

  const badgeColor = genreToBadgeColor(movie.genre);

  return (
    <Card
      className="text-center shadow"
      style={{ width: "19rem", height: "35rem" }} // Golden ratio: 1.61
    >
      <Card.Img
        variant="top"
        style={{ height: "25rem" }}
        src={movie.poster || placeholderPosterImg}
        alt="Movie Poster"
      />

      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{movie.year}</Card.Subtitle>

        <p className="mb-0">
          <MDBBadge color={badgeColor} pill>
            {movie.genre}
          </MDBBadge>
        </p>
      </Card.Body>

      <Card.Footer>
        <Container
          fluid
          className="d-flex flex-row align-content-center justify-content-around fs-5"
        >
          <Link to={`/collections/movies/${movie._id}`}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-top">See more details</Tooltip>}
            >
              <Icon.EyeFill style={{ color: "#0d6efd" }} />
            </OverlayTrigger>
          </Link>

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
  );
}

export default MovieCard;
