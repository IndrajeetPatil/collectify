import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Autocomplete from "react-google-autocomplete";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemService from "../../services/api";

function PlaceCreate() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState({});
  const [description, setDescription] = useState("");
  const [visited, setVisited] = useState(false);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleLocation = (e) => setLocation(e);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleVisited = (e) => setVisited(e.target.checked);
  const handleImage = (e) => setImage(e.target.value);

  const handleCreatePlaceSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name,
      location,
      latitude: location.geometry.location.lat(),
      longitude: location.geometry.location.lng(),
      visited,
      description,
      image,
    };
    itemService
      .createItem(requestBody, "places")
      .then((response) => navigate("/collections/places"))
      .catch((error) => console.log(error));
  };

  return (
    <Container
      fluid
      className="mt-5"
    >
      <Row
        className="text-center justify-content-center align-content-center"
        style={{ width: "100vw", height: "80vh" }}
      >
        <Col
          xs={12}
          sm={8}
          md={6}
          lg={4}
        >
          <Card className="mb-0 shadow">
            <Card.Body>
              <Form onSubmit={handleCreatePlaceSubmit}>
                {/* name */}
                <Form.Group className="mb-2">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name of the place"
                    value={name}
                    name="name"
                    required
                    onChange={handleName}
                  />
                </Form.Group>

                {/* location */}
                <Form.Group className="mb-3">
                  <Form.Label>Location*</Form.Label>
                  <Autocomplete
                    apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                    style={{ width: "100%" }}
                    className="form-control pac-target-input"
                    placeholder="Enter location"
                    name="location"
                    required
                    onPlaceSelected={handleLocation}
                  />
                </Form.Group>

                {/* visited yet? */}
                <Form.Group className="mb-2 d-flex flex-row justify-content-evenly">
                  <Form.Label>Have you visited this place?*</Form.Label>
                  <Form.Check
                    type="checkbox"
                    name="visited"
                    value={visited}
                    required
                    onChange={handleVisited}
                  />
                </Form.Group>

                {/* description */}
                <Form.Group className="mb-2">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description (Why you want to visit this place? How was your visit? What did you do there?)"
                    value={description}
                    name="description"
                    onChange={handleDescription}
                  />
                </Form.Group>

                {/* imageURL */}
                <Form.Group className="mb-2">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image URL"
                    value={image}
                    name="image"
                    onChange={handleImage}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="mb-0"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">*Required fields</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PlaceCreate;
