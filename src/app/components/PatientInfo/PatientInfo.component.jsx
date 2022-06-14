// Import packages
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import actions from PatientInfoSlice
import { deletePatient } from "../../../redux/slices/PatientInfoSlice";

// Import styled components
import {
  Container,
  Header,
  Div,
  CardContainer,
  CardTitle,
  CardContent,
  Button,
  InputSize,
} from "./PatientInfo.elements";

// Import images
import ClosedBin from "../../../images/ClosedBin.png";

function PatientInfo() {
  // Import state from PatientInfoSlice
  const state = useSelector((state) => state.patient);

  // Set local state to manage search bar
  const [searchTerm, setSearchTerm] = useState("");
  // Initiate dispatch variable to be able to use "useDispatch()"
  const dispatch = useDispatch();

  // Store patients in a variable
  const Patients = state.patientList;

  //  Return all the patient whose name match the search input values
  const patientArr = Patients.filter((patient) => {
    if (searchTerm === "") {
      return patient;
    } else if (patient.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return patient;
    }
  })

    // Sort patient alphabetically
    .sort((a, b) => (a.itemM > b.itemM ? 1 : -1))

    // Display each patient in their own card
    .map((patient) => (
      <div key={patient.id}>
        <CardContainer>
          <CardContent>
            <CardTitle>
              <h3>{patient.name}</h3>
              <Button onClick={() => dispatch(deletePatient(patient.id))}>
                <img
                  style={{ width: "30px" }}
                  src={ClosedBin}
                  alt="Trash Bin"
                />
              </Button>
            </CardTitle>
            <div>
              <strong>Age: </strong>
              <span>{patient.age}</span>
            </div>
            <div>
              <strong>Gender: </strong>
              <span>{patient.gender}</span>
            </div>
            <div>
              <strong>Illness: </strong>
              <span>{patient.illness}</span>
            </div>
            <div>
              <strong> Symptoms: </strong>
              <span>{patient.symptoms}</span>
            </div>
            <div>
              <strong>Medication: </strong>
              <span>{patient.medication}</span>
            </div>
            <div>
              <strong>Instructions on Medication: </strong>
              <span>{patient.instructions}</span>
            </div>
          </CardContent>
        </CardContainer>
      </div>
    ));
  return (
    <Container>
      <Header>Patient List</Header>

      <Div>
        <InputSize
          type="text"
          placeholder="Search by name..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {patientArr}
      </Div>
    </Container>
  );
}

export default PatientInfo;
