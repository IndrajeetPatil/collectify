import React, { useState, useEffect } from "react";
import apiService from "../../services/api";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import paintingsImg from "../../assets/images/paintings.jpeg";

function PaintingsList() {
  return (
    <Container
      fluid
      className="text-center"
    >
      <Row>
        <Image
          src={paintingsImg}
          style={{ height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>Collection of Your Paintings!</h1>
      </Row>

      <Row>
        <hr></hr>
      </Row>
    </Container>
  );
}

export default PaintingsList;
