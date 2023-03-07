import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import NavBar from "./components/NavBar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import CollectionsList from "./pages/Collections/CollectionsList";

import BooksList from "./pages/Books/BooksList";
import BookCreate from "./pages/Books/BookCreate";
import BookDelete from "./pages/Books/BookDelete";

import MoviesList from "./pages/Movies/MoviesList";
import MovieCreate from "./pages/Movies/MovieCreate";
import MovieDetails from "./pages/Movies/MovieDetails";
import MovieEdit from "./pages/Movies/MovieEdit";
import MovieDelete from "./pages/Movies/MovieDelete";

import PlacesList from "./pages/Places/PlacesList";
import PlaceCreate from "./pages/Places/PlaceCreate";
import PlaceDelete from "./pages/Places/PlaceDelete";
import PlaceEdit from "./pages/Places/PlaceEdit";

import PaintingList from "./pages/Paintings/PaintingsList";
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

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
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

        <Route
          path="/collections/paintings"
          element={
            <IsPrivate>
              <PaintingList />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/photos"
          element={
            <IsPrivate>
              <PhotosList />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/places"
          element={
            <IsPrivate>
              <PlacesList />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/songs"
          element={
            <IsPrivate>
              <SongsList />
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
