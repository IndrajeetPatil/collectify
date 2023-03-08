import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";

import * as Icon from "react-bootstrap-icons";

import profileService from "../services/profile";
import placeholderAvatar from "../assets/images/profile-avatar-placeholder.png";

function ProfilePage() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    profileService
      .readProfile()
      .then((response) => {
        console.log("response is ", response.data);
        setProfile(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(profile);

  return (
    <section className="vh-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol
            lg="6"
            className="mb-4 mb-lg-0"
          >
            <MDBCard
              className="mb-3"
              style={{ borderRadius: "0.5rem" }}
            >
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white bg-primary"
                  style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}
                >
                  <MDBCardImage
                    src={profile.image || placeholderAvatar}
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                  <MDBTypography tag="h5">{profile.name}</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>

                  <Icon.PencilSquare
                    className="mb-3"
                    size={20}
                  />
                </MDBCol>

                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Profile</MDBTypography>

                    <hr className="mt-0 mb-4" />

                    <MDBRow className="pt-1">
                      <MDBCol
                        size="9"
                        className="mb-3"
                      >
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{profile.email}</MDBCardText>
                      </MDBCol>

                      <MDBCol
                        size="3"
                        className="mb-3"
                      >
                        <MDBTypography tag="h6">Sex</MDBTypography>
                        <MDBCardText className="text-muted">{profile.sex}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Account Summary</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol
                        size="4"
                        className="mb-3"
                      >
                        <MDBTypography tag="h6">Books</MDBTypography>
                        <MDBCardText className="text-muted">{profile.collections.books.length}</MDBCardText>
                      </MDBCol>

                      <MDBCol
                        size="4"
                        className="mb-3"
                      >
                        <MDBTypography tag="h6">Movies</MDBTypography>
                        <MDBCardText className="text-muted">{profile.collections.movies.length}</MDBCardText>
                      </MDBCol>

                      <MDBCol
                        size="4"
                        className="mb-3"
                      >
                        <MDBTypography tag="h6">Paintings</MDBTypography>
                        <MDBCardText className="text-muted">{profile.collections.paintings.length}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="pt-1">
                      <MDBCol
                        size="4"
                        className="mb-3"
                      >
                        <MDBTypography tag="h6">Photos</MDBTypography>
                        <MDBCardText className="text-muted">{profile.collections.photos.length}</MDBCardText>
                      </MDBCol>

                      <MDBCol
                        size="4"
                        className="mb-3"
                      >
                        <MDBTypography tag="h6">Places</MDBTypography>
                        <MDBCardText className="text-muted">{profile.collections.places.length}</MDBCardText>
                      </MDBCol>

                      <MDBCol
                        size="4"
                        className="mb-3"
                      >
                        <MDBTypography tag="h6">Songs</MDBTypography>
                        <MDBCardText className="text-muted">{profile.collections.songs.length}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default ProfilePage;
