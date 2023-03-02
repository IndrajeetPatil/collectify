import { Link } from "react-router-dom";

import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

function CollectionCard(props) {
  return (
    <Col className="g-5 m-5">
      <Card style={{ width: "20rem", height: "25rem", backgroundColor: "#F7F1E5" }}>
        <Card.Img
          variant="top"
          src={props.image}
          style={{ height: "15rem" }}
        />
        <Card.Body>
          <Card.Title>
            {props.icon} {capitalizeFirstLetter(props.title)}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.length} Items</Card.Subtitle>
          <Card.Text>
            <hr></hr>
          </Card.Text>
          <Link to={`/collections/${props.title}`}>
            <Button variant="success">To the {props.title}!</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CollectionCard;
