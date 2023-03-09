import { useNavigate, useParams } from "react-router-dom";

import DeleteConfirmationModal from "../../components/DeleteConfirmation";

import itemService from "../../services/api";

function PhotoDelete() {
  const navigate = useNavigate();
  const { photoId } = useParams();

  const handleCancel = () => navigate("/collections/photos");
  const handleDelete = (e) => {
    e.preventDefault();

    itemService
      .deleteItem(photoId, "photos")
      .then((response) => navigate("/collections/photos"))
      .catch((error) => console.log(error));
  };

  return (
    <DeleteConfirmationModal
      itemType="photo"
      handleCancel={handleCancel}
      handleDelete={handleDelete}
    />
  );
}

export default PhotoDelete;
