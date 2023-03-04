import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import movieService from "../../services/movie";

function MovieDelete() {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const handleCancelDeleteMovie = () => navigate("/collections/movies");
  const handleDeleteMovieSubmit = (e) => {
    e.preventDefault();

    movieService
      .deleteMovie(movieId)
      .then((response) => navigate("/collections/movies"))
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Deleting a movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you would like to delete this movie?</p>
        </Modal.Body>

        <Modal.Footer className="justify-content-evenly">
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
    </div>
  );
}

export default MovieDelete;
