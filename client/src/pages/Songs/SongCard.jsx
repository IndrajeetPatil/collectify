import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBBadge } from "mdb-react-ui-kit";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

function SongCard({ song }) {
  function genreToBadgeColor(genre) {
    switch (genre) {
      case "Bollywood":
        return "success";
      case "Pop":
        return "info";
      case "R&B":
        return "primary";
      case "Hip Hop":
        return "warning";
      case "Country":
        return "danger";
      case "Jazz":
        return "secondary";
      default:
        return "dark";
    }
  }

  const badgeColor = genreToBadgeColor(song.genre);

  return (
    <MDBCol className="mb-4">
      <MDBCard style={{ width: "20rem" }}>
        <div className="d-flex justify-content-between align-content-center p-3">
          <p className="lead mb-0">{song.title}</p>
          <div
            className="d-flex align-items-center justify-content-center shadow-1-strong"
            style={{ width: "35px", height: "35px" }}
          >
            <p className="fs-2 mb-0">
              {song.ownAlbum ? (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">I own this album!</Tooltip>}
                >
                  <Icon.DiscFill />
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">I'd like to own this album!</Tooltip>}
                >
                  <Icon.BagHeartFill />
                </OverlayTrigger>
              )}
            </p>
          </div>
        </div>

        <div className="ratio ratio-16x9">
          <iframe
            src={song.url}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>

        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <p>
              <strong>{song.artist}</strong>
            </p>
            <p className="small text-muted">{song.year}</p>
          </div>

          <div className="d-flex justify-content-center mb-3">
            <p>{song.description}</p>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="mb-0">
              <MDBBadge
                color={badgeColor}
                pill
              >
                {song.genre}
              </MDBBadge>
            </p>
            <div className="d-flex flex-row align-content-between">
              <Link to={`/collections/songs/edit/${song._id}`}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Edit details</Tooltip>}
                >
                  <Icon.Pencil
                    className="me-2"
                    style={{ color: "green" }}
                  />
                </OverlayTrigger>
              </Link>

              <Link to={`/collections/songs/delete/${song._id}`}>
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

export default SongCard;
