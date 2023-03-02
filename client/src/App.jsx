import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import NavBar from "./components/NavBar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import Collections from "./pages/Collections/Collections";

function App() {
  return (
    <div className="App">
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

        <Route
          path="/collections"
          element={
            <IsPrivate>
              <Collections />
            </IsPrivate>
          }
        />

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
