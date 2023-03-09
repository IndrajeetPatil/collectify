import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemService from "../../services/api";

import watchToEmbedURL from "../../utils/watchToEmbedURL";

import CreateSubmission from "../../components/CreateSubmission";

function SongCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [ownAlbum, setOwnAlbum] = useState(false);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleArtist = (e) => setArtist(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleOwnAlbum = (e) => setOwnAlbum(e.target.checked);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleUrl = (e) => setUrl(e.target.value);

  const handleCreateSongSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      year,
      artist,
      genre,
      ownAlbum,
      description,
      url: watchToEmbedURL(url),
    };
    itemService
      .createItem(requestBody, "songs")
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

                {/* ownAlbum */}
                <Form.Group className="mb-2">
                  <Form.Label>Do you own this album?</Form.Label>
                  <Form.Check
                    value={ownAlbum}
                    name="ownAlbum"
                    onChange={handleOwnAlbum}
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
                <CreateSubmission collection="songs" />
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

export default SongCreate;
