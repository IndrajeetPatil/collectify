import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";

import { Button, Form } from "react-bootstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import profileService from "../../services/profile";

function ProfileFeedback() {
  const navigate = useNavigate();

  const [feedbackRating, setFeedbackRating] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedbackRating = (e) => setFeedbackRating(e.target.value);
  const handleFeedbackText = (e) => setFeedbackText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackTimestamp = new Date().toISOString();
    const requestBody = { feedbackRating, feedbackText, feedbackTimestamp };
    profileService
      .uploadFeedback(requestBody)
      .then((response) => navigate("/profile"))
      .catch((error) => console.log(error));
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center mb-5 mt-5">
        <MDBCol
          xs={12}
          sm={8}
          md={6}
          lg={4}
        >
          <MDBCard>
            <MDBCardBody>
              <div className="text-center">
                <MDBIcon
                  far
                  icon="file-alt mb-3 text-primary"
                  size="4x"
                />
                <p>
                  <strong>Your opinion matters!</strong>
                </p>
                <p>Have some ideas how to improve our product?</p>
                <p>
                  <strong>Give us your feedback.</strong>
                </p>
              </div>

              <hr />

              <Form
                className="px-4"
                action=""
              >
                <Form.Group className="mb-2 text-center">
                  <Form.Label className="mb-3">
                    <strong>Your rating</strong>
                  </Form.Label>

                  <Form.Select
                    value={feedbackRating}
                    name="rating"
                    required
                    onChange={handleFeedbackRating}
                  >
                    <option></option>
                    <option>Very good</option>
                    <option>Good</option>
                    <option>Mediocre</option>
                    <option>Bad</option>
                    <option>Very bad</option>
                  </Form.Select>
                </Form.Group>

                <p className="text-center mt-3">
                  <strong>What could we improve?</strong>
                </p>

                <MDBTextArea
                  className="mb-4"
                  id="textAreaExample"
                  rows={4}
                  placeholder="Your feedback"
                  value={feedbackText}
                  onChange={handleFeedbackText}
                />
              </Form>
            </MDBCardBody>

            <MDBCardFooter>
              <div className="text-center">
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ProfileFeedback;
