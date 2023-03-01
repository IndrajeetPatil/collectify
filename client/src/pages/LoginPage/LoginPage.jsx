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
    <div className="LoginPage">
      <div class="container d-flex">
        <div class="row flex-grow-1 justify-content-center align-items-center">
          <div class="col col-sm-8 col-lg-4">
            <Card
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title>Login </Card.Title>
                <Card.Text>
                  <Form
                    className="mb-3"
                    onSubmit={handleLoginSubmit}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        required
                        onChange={handleEmail}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
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
                      className="mb-3"
                      variant="primary"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Form>

                  <p>Don't have an account yet?</p>
                  <Link to={"/signup"}> Sign Up</Link>
                </Card.Text>
              </Card.Body>
            </Card>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
