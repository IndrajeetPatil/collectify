import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import ProfilePage from "./pages/ProfilePage";
import ProfileEdit from "./pages/ProfileEdit";
import ProfileDelete from "./pages/ProfileDelete";
import Feedback from "./pages/Feedback";

import NavBar from "./components/NavBar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import CollectionsList from "./pages/Collections/CollectionsList";

import BooksList from "./pages/Books/BooksList";
import BookCreate from "./pages/Books/BookCreate";
import BookDelete from "./pages/Books/BookDelete";
import BookEdit from "./pages/Books/BookEdit";

import MoviesList from "./pages/Movies/MoviesList";
import MovieCreate from "./pages/Movies/MovieCreate";
import MovieDetails from "./pages/Movies/MovieDetails";
import MovieEdit from "./pages/Movies/MovieEdit";
import MovieDelete from "./pages/Movies/MovieDelete";

import PaintingsList from "./pages/Paintings/PaintingsList";
import PaintingCreate from "./pages/Paintings/PaintingCreate";
import PaintingDelete from "./pages/Paintings/PaintingDelete";
import PaintingEdit from "./pages/Paintings/PaintingEdit";

import PlacesList from "./pages/Places/PlacesList";
import PlaceCreate from "./pages/Places/PlaceCreate";
import PlaceDelete from "./pages/Places/PlaceDelete";
import PlaceEdit from "./pages/Places/PlaceEdit";

import PhotosList from "./pages/Photos/PhotosList";

import SongsList from "./pages/Songs/SongsList";

function App() {
  return (
    <div className="App">
      {/* Unprotected routes */}
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Protected routes: profile */}
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              <ProfileEdit />
            </IsPrivate>
          }
        />

        <Route
          path="/profile/delete"
          element={
            <IsPrivate>
              <ProfileDelete />
            </IsPrivate>
          }
        />

        <Route
          path="/feedback"
          element={
            <IsPrivate>
              <Feedback />
            </IsPrivate>
          }
        />

        {/* Protected routes: collections */}
        <Route
          path="/collections"
          element={
            <IsPrivate>
              <CollectionsList />
            </IsPrivate>
          }
        />

        {/* Protected routes: collections/books */}
        <Route
          path="/collections/books"
          element={
            <IsPrivate>
              <BooksList />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/books/create"
          element={
            <IsPrivate>
              <BookCreate />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/books/edit/:bookId"
          element={
            <IsPrivate>
              <BookEdit />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/books/delete/:bookId"
          element={
            <IsPrivate>
              <BookDelete />
            </IsPrivate>
          }
        />

        {/* Protected routes: collections/movies */}
        <Route
          path="/collections/movies"
          element={
            <IsPrivate>
              <MoviesList />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/movies/create"
          element={
            <IsPrivate>
              <MovieCreate />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/movies/:movieId"
          element={
            <IsPrivate>
              <MovieDetails />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/movies/edit/:movieId"
          element={
            <IsPrivate>
              <MovieEdit />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/movies/delete/:movieId"
          element={
            <IsPrivate>
              <MovieDelete />
            </IsPrivate>
          }
        />

        {/* Protected routes: collections/paintings */}
        <Route
          path="/collections/paintings"
          element={
            <IsPrivate>
              <PaintingsList />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/paintings/create"
          element={
            <IsPrivate>
              <PaintingCreate />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/paintings/edit/:paintingId"
          element={
            <IsPrivate>
              <PaintingEdit />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/paintings/delete/:paintingId"
          element={
            <IsPrivate>
              <PaintingDelete />
            </IsPrivate>
          }
        />

        {/* Protected routes: collections/places */}
        <Route
          path="/collections/places"
          element={
            <IsPrivate>
              <PlacesList />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/places/create"
          element={
            <IsPrivate>
              <PlaceCreate />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/places/edit/:placeId"
          element={
            <IsPrivate>
              <PlaceEdit />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/places/delete/:placeId"
          element={
            <IsPrivate>
              <PlaceDelete />
            </IsPrivate>
          }
        />

        {/* Protected routes: collections/photos */}
        <Route
          path="/collections/photos"
          element={
            <IsPrivate>
              <PhotosList />
            </IsPrivate>
          }
        />

        {/* Protected routes: collections/songs */}
        <Route
          path="/collections/songs"
          element={
            <IsPrivate>
              <SongsList />
            </IsPrivate>
          }
        />

        {/* Auth routes  */}
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
