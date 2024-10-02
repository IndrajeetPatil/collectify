import { MDBBadge } from "mdb-react-ui-kit";

import Container from "react-bootstrap/esm/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import collapseToCommaSeparatedString from "../../utils/collapseToCommaSeparatedString";
import bookCoverPlaceholder from "../../assets/images/book-cover-placeholder.png";

function BookTableRow({ book }) {
  const selectBadgeColor = (status) => {
    switch (status) {
      case "Read":
        return "success";
      case "Reading":
        return "warning";
      case "To Read":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <>
      {/* Title */}
      <td>
        <div className="d-flex align-items-center">
          <img
            src={book.cover || bookCoverPlaceholder}
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                {book.description || "No book description available."}
              </Tooltip>
            }
          >
            <div className="ms-3">
              <p className="fw-bold mb-1">{book.title}</p>
              <p className="text-muted mb-0">{book.year}</p>
            </div>
          </OverlayTrigger>
        </div>
      </td>

      {/* Author */}
      <td>
        <p className="fw-normal mb-1">
          {collapseToCommaSeparatedString(book.author)}
        </p>
      </td>

      {/* Genre */}
      <td>{book.genre}</td>

      {/* Status */}
      <td>
        <MDBBadge color={selectBadgeColor(book.status)} pill>
          {book.status}
        </MDBBadge>
      </td>

      {/* Actions */}
      <td>
        <Container>
          <Link to={`/collections/books/edit/${book._id}`}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-top">Edit details</Tooltip>}
            >
              <Icon.Pencil className="me-3" style={{ color: "green" }} />
            </OverlayTrigger>
          </Link>

          <Link to={`/collections/books/delete/${book._id}`}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-top">Delete this item</Tooltip>}
            >
              <Icon.Trash style={{ color: "red" }} />
            </OverlayTrigger>
          </Link>
        </Container>
      </td>
    </>
  );
}

export default BookTableRow;
