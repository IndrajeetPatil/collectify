import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import itemService from "../../services/api";
import EditSubmission from "../../components/EditSubmission";

function PaintingEdit() {
  const navigate = useNavigate();
  const { paintingId } = useParams();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [seenOriginal, setSeenOriginal] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleArtist = (e) => setArtist(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleSeenOriginal = (e) => setSeenOriginal(e.target.checked);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  useEffect(() => {
    itemService
      .readItem(paintingId, "paintings")
      .then((response) => {
        return response.data;
      })
      .then((painting) => {
        setTitle(painting.title);
        setYear(painting.year);
        setSeenOriginal(painting.status);
        setArtist(painting.artist);
        setGenre(painting.genre);
        setDescription(painting.description);
        setImage(painting.cover);
      })
      .catch((error) => console.log(error));
  }, [paintingId]);

  const handleCreatePaintingSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, year, artist, genre, seenOriginal, description, image };
    itemService
      .updateItem(paintingId, requestBody, "paintings")
      .then((response) => navigate("/collections/paintings"))
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
              <Form onSubmit={handleCreatePaintingSubmit}>
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

                {/* artist */}
                <Form.Group className="mb-2">
                  <Form.Label>Artist*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    value={artist}
                    name="artist"
                    onChange={handleArtist}
                    required
                    placeholder="Enter artist"
                  />
                </Form.Group>

                {/* genre */}
                <Form.Group className="mb-2">
                  <Form.Label>Genre*</Form.Label>
                  <Form.Select
                    value={genre}
                    name="genre"
                    required
                    onChange={handleGenre}
                  >
                    <option></option>
                    <option>Abstract</option>
                    <option>Baroque</option>
                    <option>Cubism</option>
                    <option>Expressionism</option>
                    <option>Impressionism</option>
                    <option>Minimalism</option>
                    <option>Modern</option>
                    <option>Pop Art</option>
                    <option>Renaissance</option>
                    <option>Romanticism</option>
                    <option>Surrealism</option>
                  </Form.Select>
                </Form.Group>

                {/* seenOriginal yet? */}
                <Form.Group className="mb-2 d-flex flex-row justify-content-evenly">
                  <Form.Label>Have you seen the original?</Form.Label>
                  <Form.Check
                    type="checkbox"
                    name="seenOriginal"
                    value={seenOriginal}
                    onChange={handleSeenOriginal}
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
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="url"
                    value={image}
                    name="image"
                    onChange={handleImage}
                    placeholder="Enter URL for painting image"
                  />
                </Form.Group>

                <EditSubmission collection="paintings" />
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

export default PaintingEdit;
