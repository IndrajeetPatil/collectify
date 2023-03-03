import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

function MovieCard(props) {
  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src={props.movie.poster}
      />

      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>Year: {props.movie.year}</Card.Text>

        <Button
          variant="primary"
          as={Link}
          to={`/collections/movies/${props.movie._id}`}
        >
          View Details
        </Button>

        <Button
          variant="warning"
          as={Link}
          to={`/collections/movies/${props.movie._id}/edit`}
        >
          <Icon.Pencil /> Edit
        </Button>

        <Button
          variant="danger"
          as={Link}
          to={`/collections/movies/${props.movie._id}/edit`}
        >
          <Icon.Trash /> Delete
        </Button>
      </Card.Body>

      <Card.Footer>
        <small className="text-muted">{props.movie.genre}</small>
      </Card.Footer>
    </Card>
  );
}

export default MovieCard;
