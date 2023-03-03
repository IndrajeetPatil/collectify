import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import placeholderPosterImg from "../../assets/images/poster-placeholder.jpg";

function MovieCard(props) {
  return (
    <Col
      key={props.movie._id}
      className="m-5"
    >
      <Card style={{ width: "20rem", height: "30rem", backgroundColor: "#ECF2FF" }}>
        <Card.Img
          variant="top"
          style={{ height: "15rem" }}
          src={props.movie.poster || placeholderPosterImg}
          alt="Movie Poster"
        />

        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>Year: {props.movie.year}</Card.Text>

          <Button
            variant="primary"
            as={Link}
            to={`/collections/movies/${props.movie._id}`}
          >
            Details
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
    </Col>
  );
}

export default MovieCard;
