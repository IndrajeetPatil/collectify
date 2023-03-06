import { useNavigate, useParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import itemService from "../../services/api";

function PlaceDelete() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  const handleCancelDeletePlace = () => navigate("/collections/places");
  const handleDeletePlaceSubmit = (e) => {
    e.preventDefault();

    itemService
      .deleteItem(placeId, "places")
      .then((response) => navigate("/collections/places"))
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Deleting a place</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you would like to delete this place?</p>
        </Modal.Body>

        <Modal.Footer className="justify-content-evenly">
          <Button
            variant="secondary"
            onClick={handleCancelDeletePlace}
          >
            Close
          </Button>
          <Button
            variant="danger"
            onClick={handleDeletePlaceSubmit}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default PlaceDelete;
