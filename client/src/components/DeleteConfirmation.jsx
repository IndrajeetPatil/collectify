import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function DeleteConfirmationModal(props) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Deleting a {props.itemType}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you would like to delete this {props.itemType}?</p>
        </Modal.Body>

        <Modal.Footer className="justify-content-evenly">
          <Button
            variant="secondary"
            onClick={props.handleCancel}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={props.handleDelete}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DeleteConfirmationModal;
