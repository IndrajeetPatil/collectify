import React, { useState, useEffect } from "react";
import itemService from "../../services/api";

import Col from "react-bootstrap/esm/Col";

import placesImg from "../../assets/images/places.jpeg";
import PlaceCard from "./PlaceCard";
import CollectionContainer from "../Collections/CollectionContainer";

import Fuse from "fuse.js";

function PlacesList() {
  const [places, setPlaces] = useState([]);
  const [placesCopy, setPlacesCopy] = useState([]);

  useEffect(() => {
    itemService
      .readItems("places")
      .then((response) => {
        setPlaces(response.data);
        return response;
      })
      .then((response) => setPlacesCopy(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterPlaces = (str) => {
    const fuse = new Fuse(placesCopy, {
      keys: ["name", "description"],
      isCaseSensitive: false,
      ignoreLocation: true,
      threshold: 0.0,
    });

    const filteredPlaces = str
      ? fuse.search(str).map((fuseObj) => fuseObj.item)
      : placesCopy;

    setPlaces(filteredPlaces);
  };

  const handleSearch = (e) => filterPlaces(e.target.value);

  const collectionItems = places.map((place, index) => {
    return (
      <Col key={place._id} index={index} className="m-5">
        <PlaceCard place={place} />
      </Col>
    );
  });

  return (
    <CollectionContainer
      image={placesImg}
      collection="places"
      category="Travel"
      quote="Not all those who wander are lost."
      quoteAuthor="J.R.R. Tolkien"
      searchHandler={handleSearch}
      collectionItems={collectionItems}
    ></CollectionContainer>
  );
}

export default PlacesList;
