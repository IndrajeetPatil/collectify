import { useNavigate, useParams } from "react-router-dom";

import DeleteConfirmationModal from "../../components/DeleteConfirmation";

import itemService from "../../services/api";

function MovieDelete() {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const handleCancel = () => navigate("/collections/movies");
  const handleDelete = (e) => {
    e.preventDefault();

    itemService
      .deleteItem(movieId, "movies")
      .then((response) => navigate("/collections/movies"))
      .catch((error) => console.log(error));
  };

  return (
    <DeleteConfirmationModal
      handleCancel={handleCancel}
      handleDelete={handleDelete}
    />
  );
}

export default MovieDelete;
