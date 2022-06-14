// Import packages
import React from "react";
// Import pages
import { PatientForm, LeftImage, RightImage } from "../../components/index";

function AddPatient() {
  return (
    <div>
      <PatientForm />
      <LeftImage />
      <RightImage />
    </div>
  );
}

export default AddPatient;
