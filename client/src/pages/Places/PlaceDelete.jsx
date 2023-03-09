import { useNavigate, useParams } from "react-router-dom";

import DeleteConfirmationModal from "../../components/DeleteConfirmation";

import itemService from "../../services/api";

function PlaceDelete() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  const handleCancel = () => navigate("/collections/places");
  const handleDelete = (e) => {
    e.preventDefault();

    itemService
      .deleteItem(placeId, "places")
      .then((response) => navigate("/collections/places"))
      .catch((error) => console.log(error));
  };

  return (
    <DeleteConfirmationModal
      itemType="place"
      handleCancel={handleCancel}
      handleDelete={handleDelete}
    />
  );
}

export default PlaceDelete;
