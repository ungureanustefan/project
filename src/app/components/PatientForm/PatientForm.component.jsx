// Importing packages
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Importing styled components
import {
  Container,
  Form,
  StyledInput,
  InputSize,
  Label,
  Textarea,
  Submit,
  H1,
  RadioLabel,
} from "./PatientForm.elements";

// Importing actions from redux PatientInfoSlice
import {
  setName,
  setAge,
  setGender,
  setIllness,
  setInstructions,
  setMedication,
  setSeverity,
  setSymptoms,
  setPatientList,
} from "../../../redux/slices/PatientInfoSlice";

function PatientForm() {
  // Declaring variable "dispatch" to be able to use "useDispatch()"
  const dispatch = useDispatch();

  // Importing state from PatientInfoSlice
  const state = useSelector((state) => state.patient);

  // Creating a handleOnClick function for the submit button
  // first performs javascript validation
  // then saves the the input values as a new patient in the patientList state from redux
  // then resets the other redux states to empty strings

  const handleOnClick = (e) => {
    e.preventDefault();
    const format = /[`!@#£$%^&*()_+=[\]{};':"\\|,.<>/?~]/;
    state.name === ""
      ? alert("Name section is empty")
      : state.name.match(format)
      ? alert("Name contains a special character")
      : state.age === ""
      ? alert("Age has to be a number")
      : state.age.match(format)
      ? alert("Age contains a special character")
      : state.age < 0 || state.age > 130
      ? alert("Age range should be between 0 and 130.")
      : state.gender === ""
      ? alert("No gender input.")
      : state.illness === ""
      ? alert("No entry for illness.")
      : state.severity === ""
      ? alert("No entry for severity.")
      : state.medication === ""
      ? alert("No entry for medication.")
      : state.instructions === ""
      ? alert("No entry for instructions")
      : dispatch(setPatientList());
    dispatch(setName(""));
    dispatch(setAge(""));
    dispatch(setIllness(""));
    dispatch(setInstructions(""));
    dispatch(setMedication(""));
    dispatch(setSeverity(""));
    dispatch(setSymptoms(""));
  };

  return (
    <Container>
      <H1>Add Patient</H1>
      <Form>
        <StyledInput>
          <Label>
            <strong>Name: </strong>
            <InputSize
              type="text"
              name="name"
              value={state.name}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
          </Label>
        </StyledInput>
        <br />
        <StyledInput>
          <Label>
            <strong>Age: </strong>
            <InputSize
              type="number"
              name="age"
              value={state.age}
              onChange={(e) => dispatch(setAge(e.target.value))}
            />
          </Label>
        </StyledInput>
        <br />
        <Label>
          <StyledInput>
            <strong>Gender: </strong>
          </StyledInput>

          <StyledInput>
            <RadioLabel>
              <strong>Female</strong>

              <input
                type="radio"
                name="gender"
                value="female"
                onChange={() => dispatch(setGender("female"))}
                style={{ marginLeft: "10px" }}
              />
              <span></span>
            </RadioLabel>
          </StyledInput>
          <StyledInput>
            <RadioLabel>
              <strong>Male</strong>

              <input
                type="radio"
                name="gender"
                value="male"
                onChange={() => dispatch(setGender("male"))}
                style={{ marginLeft: "10px" }}
              />
              <span></span>
            </RadioLabel>
          </StyledInput>
        </Label>
        <br />
        <StyledInput>
          <Label>
            <strong>Illness: </strong>
            <InputSize
              type="text"
              name="illness"
              value={state.illness}
              onChange={(e) => dispatch(setIllness(e.target.value))}
            />
          </Label>
        </StyledInput>
        <br />
        <StyledInput>
          <Label>
            <strong>Symptoms: </strong>
            <InputSize
              type="text"
              name="symptoms"
              value={state.symptoms}
              onChange={(e) => dispatch(setSymptoms(e.target.value))}
            />
          </Label>
        </StyledInput>
        <br />
        <StyledInput>
          <Label>
            <strong>Severity: </strong>
            <InputSize
              type="text"
              name="severity"
              value={state.severity}
              onChange={(e) => dispatch(setSeverity(e.target.value))}
            />
          </Label>
        </StyledInput>
        <br />
        <StyledInput>
          <Label>
            <strong>Medication Given: </strong>
            <Textarea
              type="text"
              name="medication-given"
              value={state.medication}
              onChange={(e) => dispatch(setMedication(e.target.value))}
            />
          </Label>
        </StyledInput>
        <br />
        <StyledInput>
          <Label>
            <strong>Instructions on Medication: </strong>
            <Textarea
              type="text"
              name="medication-instructions"
              value={state.instructions}
              onChange={(e) => dispatch(setInstructions(e.target.value))}
            />
          </Label>
        </StyledInput>
        <br />
        <Submit value="Save" onClick={handleOnClick}>
          Save
        </Submit>
      </Form>
    </Container>
  );
}

export default PatientForm;
