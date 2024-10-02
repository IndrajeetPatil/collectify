import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBadge,
} from "mdb-react-ui-kit";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import placeholderPosterImg from "../../assets/images/painting-placeholder.jpeg";

function PaintingCard({ painting }) {
  const genreToBadgeColor = (genre) => {
    switch (genre) {
      case "Impressionism":
        return "success";
      case "Cubism":
        return "info";
      case "Surrealism":
        return "primary";
      case "Abstract":
        return "warning";
      case "Expressionism":
        return "danger";
      case "Realism":
        return "secondary";
      default:
        return "dark";
    }
  };

  const badgeColor = genreToBadgeColor(painting.genre);

  return (
    <MDBCol className="mb-4">
      <MDBCard style={{ width: "20rem" }}>
        <div className="d-flex justify-content-between p-3">
          <p className="lead mb-0">{painting.title}</p>
          <div
            className="d-flex align-items-center justify-content-center shadow-1-strong"
            style={{ width: "35px", height: "35px" }}
          >
            <p className="fs-2 mb-0">
              {painting.seenOriginal ? (
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      I've seen the original painting!
                    </Tooltip>
                  }
                >
                  <Icon.BookmarkCheck />
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      I'm yet to see the original painting!
                    </Tooltip>
                  }
                >
                  <Icon.BookmarkX />
                </OverlayTrigger>
              )}
            </p>
          </div>
        </div>

        <MDBCardImage
          src={painting.image || placeholderPosterImg}
          position="top"
          alt="Painting"
        />

        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <p>
              <strong>{painting.artist}</strong>
            </p>
            <p className="small text-muted">{painting.year}</p>
          </div>

          <div className="d-flex justify-content-center mb-3">
            <p>{painting.description}</p>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="mb-0">
              <MDBBadge color={badgeColor} pill>
                {painting.genre}
              </MDBBadge>
            </p>
            <div className="d-flex flex-row align-content-between">
              <Link to={`/collections/paintings/edit/${painting._id}`}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Edit details</Tooltip>}
                >
                  <Icon.Pencil className="me-2" style={{ color: "green" }} />
                </OverlayTrigger>
              </Link>

              <Link to={`/collections/paintings/delete/${painting._id}`}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Delete this item</Tooltip>}
                >
                  <Icon.Trash style={{ color: "red" }} />
                </OverlayTrigger>
              </Link>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default PaintingCard;
