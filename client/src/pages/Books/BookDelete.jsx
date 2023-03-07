import { useNavigate, useParams } from "react-router-dom";

import itemService from "../../services/api";

import DeleteConfirmationModal from "../../components/DeleteConfirmation";

function BookDelete() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const handleCancel = () => navigate("/collections/books");
  const handleDelete = (e) => {
    e.preventDefault();

    itemService
      .deleteItem(bookId, "books")
      .then((response) => navigate("/collections/books"))
      .catch((error) => console.log(error));
  };

  return (
    <DeleteConfirmationModal
      handleCancel={handleCancel}
      handleDelete={handleDelete}
    />
  );
}

export default BookDelete;
