import { useNavigate, useParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import itemService from "../../services/api";

function BookDelete() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const handleCancelDeleteBook = () => navigate("/collections/books");
  const handleDeleteBookSubmit = (e) => {
    e.preventDefault();

    itemService
      .deleteItem(bookId, "books")
      .then((response) => navigate("/collections/books"))
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Deleting a book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you would like to delete this book?</p>
        </Modal.Body>

        <Modal.Footer className="justify-content-evenly">
          <Button
            variant="secondary"
            onClick={handleCancelDeleteBook}
          >
            Close
          </Button>
          <Button
            variant="danger"
            onClick={handleDeleteBookSubmit}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default BookDelete;
