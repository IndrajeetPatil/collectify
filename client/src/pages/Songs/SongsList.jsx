import React, { useState, useEffect } from "react";
import apiService from "../../services/collections";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import songsImg from "../../assets/images/songs.jpeg";

function SongsList() {
  return (
    <Container
      fluid
      className="text-center"
    >
      <Row>
        <Image
          src={songsImg}
          style={{ height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>Collection of Your Songs!</h1>
      </Row>

      <Row>
        <hr></hr>
      </Row>
    </Container>
  );
}

export default SongsList;
