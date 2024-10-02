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
      style={{ width: "100vw" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Row className="text-center mt-5">
        <Col
          className="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center"
          sm={4}
        >
          <h1>About Collectify</h1>
          <p className="lead">
            <em>Collectify</em> is a platform for individuals to create a
            personalized collection of their favourite things, including books,
            movies, photos, and more,{" "}
            <strong>in one place and without the fear of judgment</strong>.
          </p>

          {!isLoggedIn && (
            <Link to="/signup">
              <Button variant="success">Join Us</Button>
            </Link>
          )}
        </Col>

        <Col className="mt-5 mb-5" sm={8}>
          <HomeCarousel />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
