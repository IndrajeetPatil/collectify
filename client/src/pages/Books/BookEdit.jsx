import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import itemService from "../../services/api";
import EditSubmission from "../../components/EditSubmission";

function BookEdit() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCover = (e) => setCover(e.target.value);

  useEffect(() => {
    itemService
      .readItem(bookId, "books")
      .then((response) => {
        return response.data;
      })
      .then((book) => {
        setTitle(book.title);
        setYear(book.year);
        setGenre(book.genre);
        setStatus(book.status);
        setAuthor(book.author);
        setDescription(book.description);
        setCover(book.cover);
      })
      .catch((error) => console.log(error));
  }, [bookId]);

  const handleCreateBookSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      year,
      genre,
      status,
      author,
      description,
      cover,
    };
    itemService
      .updateItem(bookId, requestBody, "books")
      .then((response) => navigate("/collections/books"))
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid className="mt-5">
      <Row
        className="text-center justify-content-center align-content-center"
        style={{ width: "100vw", height: "80vh" }}
      >
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="mt-5 mb-0 shadow">
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
                    placeholder="Enter author(s) separated by commas"
                  />
                </Form.Group>

                {/* genre */}
                <Form.Group className="mb-2">
                  <Form.Label>Genre*</Form.Label>
                  <Form.Select
                    value={genre}
                    name="genre"
                    onChange={handleGenre}
                  >
                    <option></option>
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Animation</option>
                    <option>Comedy</option>
                    <option>Non-Fiction</option>
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
                    as="textarea"
                    rows={2}
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

                <EditSubmission collection="books" />
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

export default BookEdit;
