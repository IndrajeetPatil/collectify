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
      className="text-center d-flex flex-column"
      style={{ width: "100vw", height: "90vh" }}
    >
      {/* FIXME: mt-5 here vertically de-aligns this content, but removing it causes problems for the mobile view  */}
      <Row className="mt-auto mb-auto">
        <Col
          className="mt-auto mb-auto"
          sm={4}
        >
          <h1>About Collectify</h1>
          <p className="lead">
            <em>Collectify</em> is platform for individuals to create a personalized collection of their favorite
            things, including books, movies, photos, and more,{" "}
            <strong>in one place and without the fear of judgment</strong>.
          </p>

          {!isLoggedIn && (
            <Link to="/signup">
              <Button variant="success">Join Us</Button>
            </Link>
          )}
        </Col>

        <Col sm={8}>
          <HomeCarousel />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
