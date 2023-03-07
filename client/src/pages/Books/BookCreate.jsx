import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemService from "../../services/api";

import extractCommaSeparatedItems from "../../utils/extractCommaSeparatedItems";

function BookCreate() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCover = (e) => setCover(e.target.value);

  const handleCreateBookSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      year,
      author: extractCommaSeparatedItems(author),
      genre,
      status,
      description,
      cover,
    };
    itemService
      .createItem(requestBody, "books")
      .then((response) => navigate("/collections/books"))
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
          <Card className="mb-0">
            <Card.Body>
              <Form onSubmit={handleCreateBookSubmit}>
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

                {/* author */}
                <Form.Group className="mb-2">
                  <Form.Label>Author(s)*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    value={author}
                    name="author"
                    onChange={handleAuthor}
                    required
                    placeholder="Enter author(s) separated by commas"
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
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Animation</option>
                    <option>Comedy</option>
                    <option>Documentary</option>
                    <option>Drama</option>
                    <option>Fantasy</option>
                    <option>Horror</option>
                    <option>Mystery/Thriller</option>
                    <option>Romance</option>
                    <option>Sci-Fi</option>
                    <option>Western</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>

                {/* status */}
                <Form.Group className="mb-2">
                  <Form.Label>Status*</Form.Label>
                  <Form.Select
                    value={status}
                    name="status"
                    required
                    onChange={handleStatus}
                  >
                    <option></option>
                    <option>Read</option>
                    <option>Reading</option>
                    <option>To Read</option>
                  </Form.Select>
                </Form.Group>

                {/* description */}
                <Form.Group className="mb-2">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={description}
                    name="description"
                    onChange={handleDescription}
                    placeholder="Enter description"
                  />
                </Form.Group>

                {/* cover */}
                <Form.Group className="mb-2">
                  <Form.Label>Cover URL</Form.Label>
                  <Form.Control
                    type="url"
                    value={cover}
                    name="cover"
                    onChange={handleCover}
                    placeholder="Enter URL for cover image"
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

export default BookCreate;
