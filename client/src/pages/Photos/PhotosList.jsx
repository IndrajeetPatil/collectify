import React, { useState, useEffect } from "react";
import apiService from "../../services/api.service";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import photosImg from "../../assets/images/photos.jpeg";

function PhotosList() {
  return (
    <Container
      fluid
      className="text-center"
    >
      <Row>
        <Image
          src={photosImg}
          style={{ height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>Collections of Your Photos!</h1>
      </Row>

      <Row>
        <hr></hr>
      </Row>
    </Container>
  );
}

export default PhotosList;
