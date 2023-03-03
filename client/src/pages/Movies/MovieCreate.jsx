import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useState } from "react";
import movieService from "../../services/movie";

function MovieCreate() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("Unknown");
  const [director, setDirector] = useState("");
  const [plot, setPlot] = useState("");
  const [url, setUrl] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleDirector = (e) => setDirector(e.target.value);
  const handlePlot = (e) => setPlot(e.target.value);
  const handleUrl = (e) => setUrl(e.target.value);

  const handleCreateMovieSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, year, genre };

    movieService
      .create(requestBody)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));

    console.log(requestBody);
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
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
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
                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="number"
                    min="1888"
                    max="3000"
                    step="1"
                    placeholder="Enter year"
                    value={year}
                    name="year"
                    required
                    onChange={handleYear}
                  />
                </Form.Group>

                <hr></hr>

                <Form.Group className="mb-3">
                  <strong>Optional</strong>
                </Form.Group>

                {/* genre */}
                <Form.Group className="mb-3">
                  <Form.Label>Genre</Form.Label>
                  <Form.Select onSelect={handleGenre}>
                    <option>Unknown</option>
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
                  </Form.Select>
                </Form.Group>

                {/* director */}
                <Form.Group className="mb-3">
                  <Form.Label>Director(s)</Form.Label>
                  <Form.Control
                    type="text"
                    value={director}
                    name="director"
                    onChange={handleDirector}
                    placeholder="Enter director(s)"
                  />
                </Form.Group>

                {/* plot */}
                <Form.Group className="mb-3">
                  <Form.Label>Plot</Form.Label>
                  <Form.Control
                    type="text"
                    value={plot}
                    name="plot"
                    onChange={handlePlot}
                    placeholder="Enter plot"
                  />
                </Form.Group>

                {/* url */}
                <Form.Group className="mb-3">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="url"
                    value={url}
                    name="url"
                    onChange={handleUrl}
                    placeholder="Enter URL for more information"
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieCreate;
