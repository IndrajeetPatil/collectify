import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Container from "react-bootstrap/esm/Container";

import HomeCarousel from "./HomeCarousel";

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Container
      fluid
      className="text-center mt-5"
      style={{ width: "50%", height: "100%" }}
    >
      <h1>About Collectify</h1>
      <p className="lead">
        <em>Collectify</em> is platform for individuals to create a personalized collection of their favorite things,
        including movies, books, photos, and more, <strong>in one place and without the fear of judgment</strong>.
      </p>

      {!isLoggedIn && (
        <p className="lead">
          <Link to="/login">
            <Button variant="success">Create an acccount!</Button>
          </Link>
        </p>
      )}

      <div className="homeCarousel mt-5">
        <HomeCarousel />
      </div>
    </Container>
  );
}

export default HomePage;
