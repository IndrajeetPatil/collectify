import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/esm/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import * as Icon from "react-bootstrap-icons";

import Tooltip from "react-bootstrap/Tooltip";

function PlaceCard({ place }) {
  const defaultProps = {
    center: {
      lat: place.latitude,
      lng: place.longitude,
    },
    zoom: 11,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: place.latitude, lng: place.longitude },
      map,
      draggable: false,
      animation: maps.Animation.DROP,
      background: place.visited ? "green" : "red",
      text: place.visited ? "I have visited this place!" : "I would love to visit this place!",
    });

    return marker;
  };

  return (
    <Accordion
      style={{ width: "90vw" }}
      className="shadow"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>{place.name}</Accordion.Header>
        <Accordion.Body>
          <div
            className="mb-3"
            style={{ height: "30vh", width: "100%" }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            ></GoogleMapReact>
          </div>

          {place.description && (
            <div className="p-1 rounded">
              <p>{place.description}</p>
            </div>
          )}

          {place.image && (
            <div className="d-flex row justify-content-center align-content-center mb-3">
              <img
                src={place.image}
                alt="A memory from this place"
              />
            </div>
          )}

          <Container
            fluid
            className="d-flex flex-row align-content-center justify-content-end fs-5"
          >
            <Link to={`/collections/places/edit/${place._id}`}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Edit details</Tooltip>}
              >
                <Icon.Pencil
                  className="me-3"
                  style={{ color: "green" }}
                />
              </OverlayTrigger>
            </Link>

            <Link to={`/collections/places/delete/${place._id}`}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Delete this item</Tooltip>}
              >
                <Icon.Trash style={{ color: "red" }} />
              </OverlayTrigger>
            </Link>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PlaceCard;
