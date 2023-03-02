import React, { useState, useEffect } from "react";
import apiService from "../../services/api.service";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import placesImg from "../../assets/images/places.jpeg";

function PlacesList() {
  return (
    <Container
      fluid
      className="text-center"
    >
      <Row>
        <Image
          src={placesImg}
          style={{ height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>Collections of Your Places!</h1>
      </Row>

      <Row>
        <hr></hr>
      </Row>
    </Container>
  );
}

export default PlacesList;
