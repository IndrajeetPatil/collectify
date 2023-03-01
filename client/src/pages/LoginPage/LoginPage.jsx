import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => setErrorMessage(error.response.data.message));
  };

  return (
    <div className="container d-flex ">
      <div className="row flex-grow-1 justify-content-center align-items-center">
        <div className="col col-sm-8 col-lg-4">
          <div className="LoginPage">
            <Card className="mb-0">
              <Card.Body>
                <Card.Text>
                  <Form
                    className="mb-3"
                    onSubmit={handleLoginSubmit}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Email address"
                        name="email"
                        id="email"
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
                        id="pass"
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
                      variant="primary"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Form>

                  <Link to={"/forgot-password"}>
                    <Button
                      className="mb-0"
                      variant="link"
                      type="submit"
                    >
                      Forgot password?
                    </Button>
                  </Link>

                  <hr />

                  <Link to={"/signup"}>
                    <Button
                      className="mb-0"
                      variant="success"
                      type="submit"
                    >
                      Create new account
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
