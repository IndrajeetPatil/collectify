import React, { useState, useEffect } from "react";
import itemService from "../../services/api";

import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

import Col from "react-bootstrap/esm/Col";

import paintingsImg from "../../assets/images/paintings.jpeg";
import PaintingCard from "./PaintingCard";
import CollectionContainer from "../Collections/CollectionContainer";

import Fuse from "fuse.js";

function PaintingsList() {
  const [paintings, setPaintings] = useState([]);
  const [paintingsCopy, setPaintingsCopy] = useState([]);

  useEffect(() => {
    itemService
      .readItems("paintings")
      .then((response) => {
        setPaintings(response.data);
        return response;
      })
      .then((response) => setPaintingsCopy(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterPaintings = (str) => {
    const fuse = new Fuse(paintingsCopy, {
      keys: ["title", "description"],
      isCaseSensitive: false,
      ignoreLocation: true,
      threshold: 0.0,
    });

    const filteredPaintings = str ? fuse.search(str).map((fuseObj) => fuseObj.item) : paintingsCopy;

    setPaintings(filteredPaintings);
  };

  const handleSearch = (e) => filterPaintings(e.target.value);

  const collectionItemCols = paintings.map((painting) => {
    return (
      <Col
        key={painting._id}
        className="m-5"
      >
        <PaintingCard painting={painting} />
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
        image={paintingsImg}
        collection="paintings"
        category="Art"
        quote="Painting is just another way of keeping a diary."
        quoteAuthor="Pablo Picasso"
        searchbarPlaceholder="Search by painting title"
        searchHandler={handleSearch}
      ></CollectionContainer>

      {collectionItems}
    </>
  );
}

export default PaintingsList;
