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
        <Navbar.Brand>
          <Link to="/">Collectify</Link>
        </Navbar.Brand>

        <Navbar.Collapse>
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

              <NavDropdown title={user && user.name}>
                <NavDropdown.Item>
                  <Link to="/profile">Profile</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/profile/edit">Edit Profile</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/profile/settings">Settings</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/profile/delete">Delete Account</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link onClick={logOutUser}>Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
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
