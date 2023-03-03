import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import movieService from "../../services/movie";

function MovieDelete() {
  const navigate = useNavigate();

  const handleCancelDeleteMovie = () => navigate("/collections/movies");

  const handleDeleteMovieSubmit = (e) => {
    e.preventDefault();

    movieService

      .delete()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Deleting a movie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you would like to delete this movie?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleCancelDeleteMovie}
        >
          Close
        </Button>
        <Button
          variant="danger"
          onClick={handleDeleteMovieSubmit}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default MovieDelete;
