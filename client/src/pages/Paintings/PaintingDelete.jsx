import { useNavigate, useParams } from "react-router-dom";

import DeleteConfirmationModal from "../../components/DeleteConfirmation";

import itemService from "../../services/api";

function PaintingDelete() {
  const navigate = useNavigate();
  const { paintingId } = useParams();

  const handleCancel = () => navigate("/collections/paintings");
  const handleDelete = (e) => {
    e.preventDefault();

    itemService
      .deleteItem(paintingId, "paintings")
      .then((response) => navigate("/collections/paintings"))
      .catch((error) => console.log(error));
  };

  return (
    <DeleteConfirmationModal
      itemType="painting"
      handleCancel={handleCancel}
      handleDelete={handleDelete}
    />
  );
}

export default PaintingDelete;
