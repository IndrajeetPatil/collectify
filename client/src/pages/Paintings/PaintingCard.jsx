import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import placeholderPosterImg from "../../assets/images/painting-placeholder.jpeg";

function PaintingCard({ painting }) {
  return (
    <MDBCol className="mb-4">
      <MDBCard>
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
                  overlay={<Tooltip id="tooltip-top">I've seen the original painting!</Tooltip>}
                >
                  <Icon.BookmarkCheck />
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">I'm yet to see the original painting!</Tooltip>}
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
            <p>{painting.artist}</p>
            <p className="small text-danger">{painting.year}</p>
          </div>

          <div className="d-flex justify-content-center mb-3">
            <p>{painting.description}</p>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">{painting.genre}</p>
            <div className="ms-auto d-flex justify-content-around">
              <Link to={`/collections/paintings/edit/${painting._id}`}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Edit details</Tooltip>}
                >
                  <Icon.Pencil style={{ color: "green" }} />
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
