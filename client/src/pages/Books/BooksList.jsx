import React, { useState, useEffect } from "react";
import itemService from "../../services/api";

import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import BookTableRow from "./BookTableRow";
import booksImg from "../../assets/images/books.jpeg";
import CollectionContainer from "../CollectionContainer";

import Fuse from "fuse.js";

function BooksList() {
  const [books, setBooks] = useState([]);
  const [booksCopy, setBooksCopy] = useState([]);

  useEffect(() => {
    itemService
      .readItems("books")
      .then((response) => {
        setBooks(response.data);
        return response;
      })
      .then((response) => setBooksCopy(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterBooks = (str) => {
    const fuse = new Fuse(booksCopy, {
      keys: ["title", "description"],
      isCaseSensitive: false,
      ignoreLocation: true,
      threshold: 0.0,
    });

    const filteredBooks = str ? fuse.search(str).map((fuseObj) => fuseObj.item) : booksCopy;

    setBooks(filteredBooks);
  };

  const handleSearch = (e) => filterBooks(e.target.value);

  const collectionItemRows = books.map((book) => {
    return (
      <tr key={book._id}>
        <BookTableRow book={book} />
      </tr>
    );
  });

  const collectionItems = (
    <MDBTable
      align="middle"
      style={{ width: "80vw" }}
    >
      <MDBTableHead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author(s)</th>
          <th scope="col">Genre</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody>{collectionItemRows}</MDBTableBody>
    </MDBTable>
  );

  return (
    <CollectionContainer
      image={booksImg}
      collection="books"
      category="Reading"
      quote="Books are a uniquely portable magic."
      quoteAuthor="Stephen King"
      searchbarPlaceholder="Search by book title or description"
      searchHandler={handleSearch}
      collectionItems={collectionItems}
    ></CollectionContainer>
  );
}

export default BooksList;
