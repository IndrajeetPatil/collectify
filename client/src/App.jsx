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
import MoviesList from "./pages/Movies/MoviesList";
import PaintingList from "./pages/Paintings/PaintingsList";
import PhotosList from "./pages/Photos/PhotosList";
import PlacesList from "./pages/Places/PlacesList";
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

        {/* Protected routes: collections  */}
        <Route
          path="/collections"
          element={
            <IsPrivate>
              <CollectionsList />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/books"
          element={
            <IsPrivate>
              <BooksList />
            </IsPrivate>
          }
        />

        <Route
          path="/collections/movies"
          element={
            <IsPrivate>
              <MoviesList />
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
