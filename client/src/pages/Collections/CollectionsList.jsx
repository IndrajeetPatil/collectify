import React, { useState, useEffect } from "react";
import collectionService from "../../services/collections";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import * as Icon from "react-bootstrap-icons";

import booksImg from "../../assets/images/books.jpeg";
import collectionsImg from "../../assets/images/collections.jpeg";
import moviesImg from "../../assets/images/movies.jpeg";
import paintingsImg from "../../assets/images/paintings.jpeg";
import placesImg from "../../assets/images/places.jpeg";
import songsImg from "../../assets/images/songs.jpeg";
import photosImg from "../../assets/images/photos.jpeg";

import CollectionCard from "./CollectionCard";

function CollectionsList() {
  const [collections, setCollections] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCollection = () => {
    collectionService
      .readCollections()
      .then((response) => {
        setCollections(response.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <Container
      fluid
      style={{ width: "100vw" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Row>
        <Image
          src={collectionsImg}
          style={{ width: "100vw", height: "30rem", padding: "0rem" }}
        />
      </Row>

      <Row className="mt-5">
        <h1 style={{ fontFamily: ["Satisfy", "cursive"] }}>
          Collections of Your Favourites!
        </h1>
      </Row>

      <Row>
        <hr style={{ width: "50vw" }}></hr>
      </Row>

      <Row>
        {/* books */}
        <CollectionCard
          title="books"
          category="Reading"
          image={booksImg}
          length={collections.books.length}
          icon={<Icon.Book />}
        />

        {/* movies */}
        <CollectionCard
          title="movies"
          category="Cinema"
          image={moviesImg}
          length={collections.movies.length}
          icon={<Icon.Film />}
        />

        {/* paintings */}
        <CollectionCard
          title="paintings"
          category="Art"
          image={paintingsImg}
          length={collections.paintings.length}
          icon={<Icon.PaintBucket />}
        />

        {/* photos */}
        <CollectionCard
          title="photos"
          category="Photography"
          image={photosImg}
          length={collections.photos.length}
          icon={<Icon.CameraFill />}
        />

        {/* places */}
        <CollectionCard
          title="places"
          category="Travel"
          image={placesImg}
          length={collections.places.length}
          icon={<Icon.GeoAltFill />}
        />

        {/* songs */}
        <CollectionCard
          title="songs"
          category="Music"
          image={songsImg}
          length={collections.songs.length}
          icon={<Icon.MusicNoteList />}
        />
      </Row>
    </Container>
  );
}

export default CollectionsList;
