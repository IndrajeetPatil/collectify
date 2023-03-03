import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Container from "react-bootstrap/esm/Container";

import HomeCarousel from "./HomeCarousel";

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Container
      fluid
      style={{ width: "100%", height: "100%" }}
      className="mt-5"
    >
      <Row>
        <Col
          xs="auto"
          className="text-center mt-5 d-block"
          sm={4}
        >
          <h1>About Collectify</h1>
          <p className="lead">
            <em>Collectify</em> is platform for individuals to create a personalized collection of their favorite
            things, including books, movies, photos, and more,{" "}
            <strong>in one place and without the fear of judgment</strong>.
          </p>

          {!isLoggedIn && (
            <p className="lead">
              <Link to="/login">
                <Button variant="success">Create an acccount!</Button>
              </Link>
            </p>
          )}
        </Col>

        <Col
          className="homeCarousel mt-5"
          sm={8}
        >
          <HomeCarousel />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
