import { useNavigate, useParams } from "react-router-dom";

import DeleteConfirmationModal from "../../components/DeleteConfirmation";

import itemService from "../../services/api";

function SongDelete() {
  const navigate = useNavigate();
  const { songId } = useParams();

  const handleCancel = () => navigate("/collections/songs");
  const handleDelete = (e) => {
    e.preventDefault();

    itemService
      .deleteItem(songId, "songs")
      .then((response) => navigate("/collections/songs"))
      .catch((error) => console.log(error));
  };

  return (
    <DeleteConfirmationModal
      itemType="song"
      handleCancel={handleCancel}
      handleDelete={handleDelete}
    />
  );
}

export default SongDelete;
