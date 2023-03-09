import React, { useState, useEffect } from "react";
import itemService from "../../services/api";

import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

import Col from "react-bootstrap/esm/Col";

import photosImg from "../../assets/images/photos.jpeg";
import PhotoCard from "./PhotoCard";
import CollectionContainer from "../Collections/CollectionContainer";

import Fuse from "fuse.js";

function PhotosList() {
  const [photos, setPhotos] = useState([]);
  const [photosCopy, setPhotosCopy] = useState([]);

  useEffect(() => {
    itemService
      .readItems("photos")
      .then((response) => {
        setPhotos(response.data);
        return response;
      })
      .then((response) => setPhotosCopy(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterPhotos = (str) => {
    const fuse = new Fuse(photosCopy, {
      keys: ["title", "description"],
      isCaseSensitive: false,
      ignoreLocation: true,
      threshold: 0.0,
    });

    const filteredPhotos = str ? fuse.search(str).map((fuseObj) => fuseObj.item) : photosCopy;

    setPhotos(filteredPhotos);
  };

  const handleSearch = (e) => filterPhotos(e.target.value);

  const collectionItemCols = photos.map((photo) => {
    return (
      <Col
        key={photo._id}
        className="ms-5 m-5"
      >
        <PhotoCard photo={photo} />
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
        image={photosImg}
        collection="photos"
        category="Photography"
        quote="Photography is a love affair with life."
        quoteAuthor="Burk Uzzle"
        searchbarPlaceholder="Search by photo title"
        searchHandler={handleSearch}
      ></CollectionContainer>

      {collectionItems}
    </>
  );
}

export default PhotosList;
