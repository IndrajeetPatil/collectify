import React from "react";
import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import grumpyCat from "../assets/images/grumpy-cat.webp";

function NotFoundPage() {
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
            <MDBCardHeader>
              <div className="text-center mt-3 mb-3">
                <h2>Page not found!</h2>
              </div>
            </MDBCardHeader>

            <img
              src={grumpyCat}
              alt="A grumpy cat"
            />

            <MDBCardBody>
              <div className="text-center">
                <p>This page doesn't seem to exist.</p>
                <p>It's a mystery how you landed here!</p>
              </div>
            </MDBCardBody>

            <MDBCardFooter>
              <div className="text-center">
                <Link to="/">
                  <Button>Return to Home</Button>
                </Link>
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default NotFoundPage;
