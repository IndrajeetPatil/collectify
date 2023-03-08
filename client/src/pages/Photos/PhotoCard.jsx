import React, { useState } from "react";
import { MDBCol, MDBModal, MDBModalBody, MDBModalFooter, MDBModalDialog, MDBModalContent } from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Tooltip from "react-bootstrap/Tooltip";

import * as Icon from "react-bootstrap-icons";

function PhotoCard({ photo }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <MDBCol
        lg={4}
        md={12}
        className="mb-4 mb-lg-0"
      >
        <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
          <img
            src={photo.image || "https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"}
            className="w-100 mb-3"
            alt={photo.title}
          />

          <Container
            fluid
            className="d-flex flex-row align-content-center justify-content-around fs-5"
          >
            <Button
              variant="outline-primary"
              onClick={() => setModal(true)}
            >
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Enlarge the image</Tooltip>}
              >
                <Icon.EyeFill style={{ color: "#0d6efd" }} />
              </OverlayTrigger>
            </Button>

            <Link to={`/collections/photos/edit/${photo._id}`}>
              <Button variant="outline-success">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Edit details</Tooltip>}
                >
                  <Icon.Pencil style={{ color: "green" }} />
                </OverlayTrigger>
              </Button>
            </Link>

            <Link to={`/collections/photos/delete/${photo._id}`}>
              <Button variant="outline-danger">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Delete this item</Tooltip>}
                >
                  <Icon.Trash style={{ color: "red" }} />
                </OverlayTrigger>
              </Button>
            </Link>
          </Container>
        </div>
      </MDBCol>

      <MDBModal
        show={modal}
        setShow={setModal}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <img
                src={photo.image || "https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"}
                style={{ width: "100%", height: "100%" }}
                alt={photo.title}
              />
            </MDBModalBody>

            <MDBModalFooter>
              <Button
                onClick={() => setModal(false)}
                variant="secondary"
              >
                Close
              </Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default PhotoCard;
