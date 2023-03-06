import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import pluralToSingular from "../utils/pluralToSingular";

function CollectionContainer(props) {
  return (
    <Container
      fluid
      style={{ width: "100vw" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Row>
        <Image
          src={props.image}
          style={{ width: "100vw", height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="text-center mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>
          Your Favourite {capitalizeFirstLetter(props.collection)}!
        </h1>
      </Row>

      <Row>
        <hr style={{ width: "50vw" }}></hr>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card style={{ width: "50vw" }}>
            <Card.Header>Collection: {props.category}</Card.Header>
            <Card.Body>
              <Card.Title>{props.quote}</Card.Title>
              <Card.Text>- {props.quoteAuthor}</Card.Text>
              <Link to={`/collections/${props.collection}/create`}>
                <Button variant="primary">Add a {pluralToSingular(props.collection)}</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Form
            style={{ width: "50vw" }}
            className="d-flex text-center"
          >
            <Form.Control
              type="search"
              placeholder={`Search by ${pluralToSingular(props.collection)} title`}
              className="me-2"
              aria-label="Search"
              onChange={props.searchHandler}
            />
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">{props.collectionItems}</Row>
    </Container>
  );
}

export default CollectionContainer;
