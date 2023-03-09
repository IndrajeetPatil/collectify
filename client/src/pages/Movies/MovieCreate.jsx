import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemService from "../../services/api";

import CreateSubmission from "../../components/CreateSubmission";

import extractCommaSeparatedItems from "../../utils/extractCommaSeparatedItems";

function MovieCreate() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [plot, setPlot] = useState("");
  const [url, setUrl] = useState("");
  const [poster, setPoster] = useState("");

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleDirector = (e) => setDirector(e.target.value);
  const handlePlot = (e) => setPlot(e.target.value);
  const handleUrl = (e) => setUrl(e.target.value);
  const handlePoster = (e) => setPoster(e.target.value);

  const handleCreateMovieSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, year, genre, director: extractCommaSeparatedItems(director), plot, url, poster };
    itemService
      .createItem(requestBody, "movies")
      .then((response) => navigate("/collections/movies"))
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
              <Form onSubmit={handleCreateMovieSubmit}>
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
                    min="1888"
                    max="3000"
                    placeholder="Enter year"
                    value={year}
                    name="year"
                    required
                    onChange={handleYear}
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

                {/* director */}
                <Form.Group className="mb-2">
                  <Form.Label>Director(s)</Form.Label>
                  <Form.Control
                    as="text"
                    value={director}
                    name="director"
                    onChange={handleDirector}
                    placeholder="Enter director(s) separated by commas"
                  />
                </Form.Group>

                {/* plot */}
                <Form.Group className="mb-2">
                  <Form.Label>Plot</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    value={plot}
                    name="plot"
                    onChange={handlePlot}
                    placeholder="Enter plot"
                  />
                </Form.Group>

                {/* url */}
                <Form.Group className="mb-2">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="url"
                    value={url}
                    name="url"
                    onChange={handleUrl}
                    placeholder="Enter URL for more information"
                  />
                </Form.Group>

                {/* poster */}
                <Form.Group className="mb-2">
                  <Form.Label>Poster URL</Form.Label>
                  <Form.Control
                    type="url"
                    value={poster}
                    name="poster"
                    onChange={handlePoster}
                    placeholder="Enter URL for poster image"
                  />
                </Form.Group>

                {/* submit */}
                <CreateSubmission collection="movies" />
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

export default MovieCreate;
