import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import profileService from "../services/profile";

function ProfileEdit() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleSex = (e) => setSex(e.target.value);

  const handleImage = (e) => {
    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);

    profileService
      .uploadImage(uploadData)
      .then((response) => {
        setImage(response.data.fileUrl);
        setImageName(response.data.fileName);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  useEffect(() => {
    profileService
      .readProfile()
      .then((response) => {
        return response.data;
      })
      .then((profile) => {
        setName(profile.name);
        setSex(profile.sex);
        setImage(profile.image);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCreateProfileSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, sex, image };
    profileService
      .updateProfile(requestBody)
      .then((response) => navigate("/profile"))
      .catch((error) => console.log(error));
  };

  return (
    <Container
      fluid
      className="mt-5"
    >
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
          <Card className="mt-5 mb-0 shadow">
            <Card.Body>
              <Form onSubmit={handleCreateProfileSubmit}>
                {/* name */}
                <Form.Group className="mb-2">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    name="name"
                    onChange={handleName}
                  />
                </Form.Group>

                {/* sex */}
                <Form.Group className="mb-2">
                  <Form.Label>Sex*</Form.Label>
                  <Form.Select
                    value={sex}
                    name="sex"
                    onChange={handleSex}
                  >
                    <option></option>
                    <option>male</option>
                    <option>female</option>
                    <option>non-binary</option>
                  </Form.Select>
                </Form.Group>

                {/* upload image */}
                <Form.Group className="mb-2">
                  <Form.Label>Upload image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder={imageName}
                    name="image"
                    onChange={handleImage}
                  />
                </Form.Group>

                <Container
                  fluid
                  className="d-flex flex-row align-content-center justify-content-around fs-5"
                >
                  <Link to={"/profile"}>
                    <Button
                      variant="secondary"
                      className="mb-0"
                    >
                      Cancel
                    </Button>
                  </Link>

                  <Button
                    variant="primary"
                    type="submit"
                    className="mb-0"
                  >
                    Save Changes
                  </Button>
                </Container>
              </Form>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">*Required fields</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileEdit;
