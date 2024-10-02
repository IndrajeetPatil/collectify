import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import itemService from "../../services/api";
import EditSubmission from "../../components/EditSubmission";

function PhotoEdit() {
  const navigate = useNavigate();
  const { photoId } = useParams();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handlePhotographer = (e) => setPhotographer(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  useEffect(() => {
    itemService
      .readItem(photoId, "photos")
      .then((response) => {
        return response.data;
      })
      .then((photo) => {
        setTitle(photo.title);
        setYear(photo.year);
        setPhotographer(photo.photographer);
        setDescription(photo.description);
        setImage(photo.image);
      })
      .catch((error) => console.log(error));
  }, [photoId]);

  const handleCreatePhotoSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, year, photographer, description, image };
    itemService
      .updateItem(photoId, requestBody, "photos")
      .then((response) => navigate("/collections/photos"))
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid className="mt-5">
      <Row
        className="text-center justify-content-center align-content-center"
        style={{ width: "100vw", height: "80vh" }}
      >
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="mb-0 shadow">
            <Card.Body>
              <Form onSubmit={handleCreatePhotoSubmit}>
                {/* title */}
                <Form.Group className="mb-2">
                  <Form.Label>Title*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    name="title"
                    required
                    onChange={handleTitle}
                  />
                </Form.Group>

                {/* year */}
                <Form.Group className="mb-2">
                  <Form.Label>Year*</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter year"
                    value={year}
                    name="year"
                    required
                    onChange={handleYear}
                  />
                </Form.Group>

                {/* photographer */}
                <Form.Group className="mb-2">
                  <Form.Label>Photographer*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    value={photographer}
                    name="photographer"
                    onChange={handlePhotographer}
                    required
                    placeholder="Enter photographer"
                  />
                </Form.Group>

                {/* description */}
                <Form.Group className="mb-2">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={description}
                    name="description"
                    onChange={handleDescription}
                    placeholder="Enter description"
                  />
                </Form.Group>

                {/* image */}
                <Form.Group className="mb-2">
                  <Form.Label>Image URL*</Form.Label>
                  <Form.Control
                    type="url"
                    value={image}
                    name="image"
                    required
                    onChange={handleImage}
                    placeholder="Enter URL for photo image"
                  />
                </Form.Group>

                <EditSubmission collection="photos" />
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

export default PhotoEdit;
