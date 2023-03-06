import Accordion from "react-bootstrap/Accordion";
import GoogleMapReact from "google-map-react";

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
      title: "Hello World!",
    });
    return marker;
  };

  return (
    <Accordion
      defaultActiveKey={["0"]}
      alwaysOpen={true}
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
            ></GoogleMapReact>
          </div>

          <div className="p-1 rounded">
            <p>{props.place.description}</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PlaceCard;
