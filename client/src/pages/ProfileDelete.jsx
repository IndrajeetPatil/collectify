import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import profileService from "../services/profile";

function ProfileDelete() {
  const navigate = useNavigate();

  const handleCancel = () => navigate("/profile");
  const handleDelete = (e) => {
    e.preventDefault();

    profileService
      .deleteProfile()
      .then((response) => navigate("/logout"))
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Deleting profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you would like to delete your profile?</p>
          <p>
            This will delete all your collections. <strong>This action cannot be undone.</strong>
          </p>
        </Modal.Body>

        <Modal.Footer className="justify-content-evenly">
          <Button
            variant="secondary"
            onClick={handleCancel}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ProfileDelete;
