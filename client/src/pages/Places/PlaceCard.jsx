import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/esm/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import * as Icon from "react-bootstrap-icons";

import Tooltip from "react-bootstrap/Tooltip";

function PlaceCard(props) {
  const defaultProps = {
    center: {
      lat: props.place.latitude,
      lng: props.place.longitude,
    },
    zoom: 11,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: props.place.latitude, lng: props.place.longitude },
      map,
      draggable: false,
      animation: maps.Animation.DROP,
      background: props.place.visited ? "green" : "red",
      text: props.place.visited ? "I have visited this place!" : "I would love to visit this place!",
    });

    return marker;
  };

  return (
    <Accordion
      style={{ width: "90vw" }}
      className="shadow"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.place.name}</Accordion.Header>
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

          <div className="p-1 rounded">
            <p>{props.place.description}</p>
          </div>

          <Container
            fluid
            className="d-flex flex-row align-content-center justify-content-end fs-5"
          >
            <Link to={`/collections/places/edit/${props.place._id}`}>
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

            <Link to={`/collections/places/delete/${props.place._id}`}>
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
