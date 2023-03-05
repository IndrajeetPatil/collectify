import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import placeholderPosterImg from "../../assets/images/poster-placeholder.jpg";
import Container from "react-bootstrap/esm/Container";

function MovieCard(props) {
  return (
    <Card
      border="dark"
      className="text-center"
      style={{ width: "19rem", height: "25rem" }} // Golden ratio: 1.61
    >
      <Card.Img
        variant="top"
        style={{ height: "15rem" }}
        src={props.movie.poster || placeholderPosterImg}
        alt="Movie Poster"
      />

      <Card.Body>
        <Card.Title>
          {props.movie.title} ({props.movie.year})
        </Card.Title>
        <Card.Text>{props.movie.genre}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container
          fluid
          className="d-flex flex-row align-content-center justify-content-around fs-4"
        >
          <Link to={`/collections/movies/${props.movie._id}`}>
            <Icon.EyeFill style={{ color: "#0d6efd" }} />
          </Link>

          <Link to={`/collections/movies/edit/${props.movie._id}`}>
            <Icon.Pencil style={{ color: "green" }} />
          </Link>

          <Link to={`/collections/movies/delete/${props.movie._id}`}>
            <Icon.Trash style={{ color: "red" }} />
          </Link>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default MovieCard;
