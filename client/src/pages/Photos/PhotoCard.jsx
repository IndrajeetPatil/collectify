import React, { useState } from "react";
import {
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalDialog,
  MDBModalContent,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Tooltip from "react-bootstrap/Tooltip";

import * as Icon from "react-bootstrap-icons";

import placeholderPhotoImg from "../../assets/images/photo-placeholder.png";

function PhotoCard({ photo }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <MDBCol className="d-flex flex-column justify-content-center align-content-center mb-4">
        <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
          <img
            src={photo.image || placeholderPhotoImg}
            className="mb-3"
            style={{ width: "20rem" }}
            alt={photo.title}
          />

          <Container
            fluid
            className="d-flex flex-row align-content-center justify-content-around fs-5"
            style={{ width: "20rem" }}
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

        <MDBModal
          show={modal}
          setShow={setModal}
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalBody>
                <MDBCard style={{ width: "100%" }}>
                  <MDBCardImage
                    src={photo.image || placeholderPhotoImg}
                    className="mb-3"
                    style={{ width: "100%", height: "100%" }}
                    alt={photo.title}
                  />

                  <MDBCardBody>
                    <div className="text-center mb-3">
                      <h3>{photo.title}</h3>
                      <p>
                        by <strong>{photo.photographer}</strong>
                        <span className="small"> ({photo.year})</span>
                      </p>
                    </div>

                    <div className="d-flex justify-content-center mb-3">
                      <p>{photo.description}</p>
                    </div>
                  </MDBCardBody>
                </MDBCard>
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
      </MDBCol>
    </>
  );
}

export default PhotoCard;
