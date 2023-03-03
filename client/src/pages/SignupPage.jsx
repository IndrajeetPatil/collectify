import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, name };
    authService
      .signup(requestBody)
      .then((response) => navigate("/login"))
      .catch((error) => setErrorMessage(error.response.data.message));
  };

  return (
    <Container fluid>
      <Row
        className="text-center justify-content-center align-content-center"
        style={{ width: "100vw", height: "80vh" }}
      >
        <Col
          xs={12}
          sm={8}
          md={6}
          lg={4}
        >
          <Card className="mb-0">
            <Card.Body>
              <Card.Text>
                <Form
                  className="mb-3"
                  onSubmit={handleSignupSubmit}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                  >
                    <Form.Control
                      type="name"
                      placeholder="Username"
                      name="name"
                      aria-label="Email address"
                      value={name}
                      required
                      onChange={handleName}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      name="email"
                      aria-label="Email address"
                      value={email}
                      required
                      onChange={handleEmail}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="pass"
                      aria-label="Password"
                      value={password}
                      required
                      onChange={handlePassword}
                    />
                  </Form.Group>

                  {/* <Form.Group
                      className="mb-3 d-flex justify-content-center"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check
                        type="checkbox"
                        label="Show password"
                      />
                    </Form.Group> */}

                  <Button
                    className="mb-0"
                    variant="success"
                    type="submit"
                  >
                    Register
                  </Button>
                </Form>

                <hr />

                <Card.Text>Have an account?</Card.Text>

                <Link to={"/login"}>
                  <Button
                    className="mb-0"
                    variant="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </Link>
              </Card.Text>
            </Card.Body>

            {errorMessage && (
              <Card.Footer className="text-muted text-center mb-0">
                <div
                  className="alert alert-danger"
                  role="alert"
                >
                  {errorMessage}
                </div>
              </Card.Footer>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
