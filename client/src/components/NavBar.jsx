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
    <Navbar bg="light">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
        >
          Collectify
        </Navbar.Brand>

        <Navbar.Collapse>
          {isLoggedIn && (
            <Nav>
              {/* Dropdown for collections */}
              <NavDropdown title="Collections">
                <NavDropdown.Item
                  as={Link}
                  to="/collections"
                >
                  All Collections
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/collections/books"
                >
                  Books
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/collections/movies"
                >
                  Movies
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/collections/paintings"
                >
                  Paintings
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/collections/photos"
                >
                  Photos
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/collections/places"
                >
                  Places
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/collections/songs"
                >
                  Songs
                </NavDropdown.Item>
              </NavDropdown>

              {/* Dropdown for user */}
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item
                  as={Link}
                  to="/profile"
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/profile/edit"
                >
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/profile/settings"
                >
                  Edit Settings
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/profile/delete"
                >
                  Delete Account
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link onClick={logOutUser}>Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}

          {/* Login */}
          {!isLoggedIn && (
            <>
              <Link to="/login">Login</Link>
            </>
          )}

          {/* TODO: add searchbar */}
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
