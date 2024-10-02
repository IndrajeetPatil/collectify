import React, { useState, useEffect } from "react";
import itemService from "../../services/api";

import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

import Col from "react-bootstrap/esm/Col";

import songsImg from "../../assets/images/songs.jpeg";
import SongCard from "./SongCard";
import CollectionContainer from "../Collections/CollectionContainer";

import Fuse from "fuse.js";

function SongsList() {
  const [songs, setSongs] = useState([]);
  const [songsCopy, setSongsCopy] = useState([]);

  useEffect(() => {
    itemService
      .readItems("songs")
      .then((response) => {
        setSongs(response.data);
        return response;
      })
      .then((response) => setSongsCopy(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterSongs = (str) => {
    const fuse = new Fuse(songsCopy, {
      keys: ["title", "description", "artist", "genre"],
      isCaseSensitive: false,
      ignoreLocation: true,
      threshold: 0.0,
    });

    const filteredSongs = str
      ? fuse.search(str).map((fuseObj) => fuseObj.item)
      : songsCopy;

    setSongs(filteredSongs);
  };

  const handleSearch = (e) => filterSongs(e.target.value);

  const collectionItemCols = songs.map((song) => {
    return (
      <Col key={song._id} className="m-5">
        <SongCard song={song} />
      </Col>
    );
  });

  const collectionItems = (
    <MDBContainer
      fluid
      style={{ width: "100vw" }}
      className="d-flex flex-column justify-content-center align-items-center my-5 mt-5"
    >
      <MDBRow>{collectionItemCols}</MDBRow>
    </MDBContainer>
  );

  return (
    <>
      <CollectionContainer
        image={songsImg}
        collection="songs"
        category="Music"
        quote="Where words fail, music speaks."
        quoteAuthor="Hans Christian Andersen"
        searchHandler={handleSearch}
      ></CollectionContainer>

      {collectionItems}
    </>
  );
}

export default SongsList;
