// Import packages
import React from "react";
import { Link } from "react-router-dom";
// Import components
import { LeftImage, RightImage } from "../../components/index";

// Import styled components
import {
  Container,
  Div,
  Header,
  Paragraph,
  Img,
  Anchor,
} from "./Homepage.elements";
// Import images
import DoctorPatients from "../../../images/DoctorPatients.svg";

function Homepage() {
  return (
    <div>
      <Container>
        <Header>Patient List App</Header>
        <Div>
          <Paragraph>
            The purpose of this app is to allow you add patients to a list of
            patients and be able to see it whenever you want.
            <br />
            <br />
            Click on "Add patient" or
            <Link to="/Add-Patient">
              {" "}
              <Anchor>click here</Anchor>{" "}
            </Link>
            if you want to add a patient.
            <br />
            <br /> Click on "Patient list" or
            <Link to="/Patient-List">
              {" "}
              <Anchor>click here</Anchor>{" "}
            </Link>
            to view your list of patients.
            <br />
            <br />
            Also you can{" "}
            <Link to="/Covid-News">
              <Anchor>click here</Anchor>
            </Link>{" "}
            to see the newest Covid-19 updates.
          </Paragraph>
          <Img src={DoctorPatients} alt="Image with a doctor and patients." />
        </Div>
      </Container>
      <LeftImage />
      <RightImage />
    </div>
  );
}

export default Homepage;
