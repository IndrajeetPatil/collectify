import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar
      bg="light"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="/">Collectify</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav>

          {isLoggedIn && (
            <Nav>
              <NavDropdown title="Collections">
                <NavDropdown.Item>
                  <Link to="/collections">All Collections</Link>
                </NavDropdown.Item>

                <hr></hr>

                <NavDropdown.Item>
                  <Link to="/collections/books">Books</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/collections/movies">Movies</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/collections/paintings">Paintings</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/collections/photos">Photos</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/collections/places">Places</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/collections/songs">Songs</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link to="/profile">
                  <span>{user && user.name}</span>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link onClick={logOutUser}>Logout</Link>
              </Nav.Link>
            </Nav>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
