import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import watchToEmbedURL from "../../utils/watchToEmbedURL";

import itemService from "../../services/api";
import EditSubmission from "../../components/EditSubmission";

function SongEdit() {
  const navigate = useNavigate();
  const { songId } = useParams();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleArtist = (e) => setArtist(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleUrl = (e) => setUrl(e.target.value);

  useEffect(() => {
    itemService
      .readItem(songId, "songs")
      .then((response) => {
        return response.data;
      })
      .then((song) => {
        setTitle(song.title);
        setYear(song.year);
        setArtist(song.artist);
        setGenre(song.genre);
        setDescription(song.description);
        setUrl(song.url);
      })
      .catch((error) => console.log(error));
  }, [songId]);

  const handleCreateSongSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, year, artist, genre, description, url: watchToEmbedURL(url) };
    itemService
      .updateItem(songId, requestBody, "songs")
      .then((response) => navigate("/collections/songs"))
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
              <Form onSubmit={handleCreateSongSubmit}>
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
                    <option>Alternative</option>
                    <option>Blues</option>
                    <option>Bollywood</option>
                    <option>Classical</option>
                    <option>Country</option>
                    <option>Dance</option>
                    <option>Electronic</option>
                    <option>Folk</option>
                    <option>Hip Hop</option>
                    <option>Indie</option>
                    <option>Jazz</option>
                    <option>Latin</option>
                    <option>Metal</option>
                    <option>Pop</option>
                    <option>Punk</option>
                    <option>R&B</option>
                    <option>Reggae</option>
                    <option>Rock</option>
                    <option>Soul</option>
                    <option>World</option>
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

                {/* url */}
                <Form.Group className="mb-2">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="url"
                    value={url}
                    name="url"
                    onChange={handleUrl}
                    required
                    placeholder="Enter YouTube URL for song"
                  />
                </Form.Group>

                {/* submit */}
                <EditSubmission collection="songs" />
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

export default SongEdit;
