import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";

import itemService from "../../services/api";
import EditSubmission from "../../components/EditSubmission";

function PlaceEdit() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  const [name, setName] = useState("");
  const [location, setLocation] = useState({});
  const [locationPlaceholder, setLocationPlaceholder] = useState("");
  const [description, setDescription] = useState("");
  const [visited, setVisited] = useState(false);
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    itemService
      .readItem(placeId, "places")
      .then((response) => {
        return response.data;
      })
      .then((place) => {
        setName(place.name);
        setLocation(place.location);
        setLocationPlaceholder(place.location.formatted_address);
        setDescription(place.description);
        setVisited(place.visited);
        setImage(place.image);
      })
      .catch((error) => console.log(error));
  }, [placeId]);

  const handleName = (e) => setName(e.target.value);
  const handleLocation = (e) => setLocation(e);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleVisited = (e) => setVisited(e.target.checked);
  const handleImage = (e) => {
    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);

    itemService
      .uploadImage(uploadData)
      .then((response) => {
        setImage(response.data.fileUrl);
        setImageName(response.data.fileName);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

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
      .updateItem(placeId, requestBody, "places")
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
                    placeholder={locationPlaceholder}
                    name="location"
                    required
                    onPlaceSelected={handleLocation}
                  />
                </Form.Group>

                {/* visited yet? */}
                <Form.Group className="mb-2 d-flex flex-row justify-content-evenly">
                  <Form.Label>Have you visited this place?</Form.Label>
                  <Form.Check
                    type="checkbox"
                    name="visited"
                    value={visited}
                    onChange={handleVisited}
                  />
                </Form.Group>

                {/* description */}
                <Form.Group className="mb-2">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Enter description (Why you want to visit this place? How was your visit? What did you do there?)"
                    value={description}
                    name="description"
                    onChange={handleDescription}
                  />
                </Form.Group>

                {/* upload image */}
                <Form.Group className="mb-3">
                  <Form.Label>Upload image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder={imageName}
                    name="image"
                    onChange={handleImage}
                  />
                </Form.Group>

                {/* submit button */}
                <EditSubmission collection="places" />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PlaceEdit;
