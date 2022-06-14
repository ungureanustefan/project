import { createSlice } from "@reduxjs/toolkit";

export const PatientInfoSlice = createSlice({
  name: "patient",
  initialState: {
    patientList: [
      {
        name: "John Doe",
        age: "37",
        gender: "Male",
        illness: "Gastritis",
        symptoms: "Indigestion, burning stomach pain, feeling sick",
        severity: "Mild",
        medication: "Antiacids",
        instructions: "3 a day, 4 hours delay between them",
        id: "1",
      },
      {
        name: "Jane Doe",
        age: "28",
        gender: "Female",
        illness: "Sinusitis",
        symptoms: "Blocked nose, reduced sense of smell, sinus headache",
        severity: "Moderate",
        medication: "Ibuprofen, nasal spray",
        instructions: "Ibuprofen twice a day, 8 hours delay between them",
        id: "2",
      },
    ],
    name: "",
    age: "",
    gender: "",
    illness: "",
    symptoms: "",
    severity: "",
    medication: "",
    instructions: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setIllness: (state, action) => {
      state.illness = action.payload;
    },
    setSymptoms: (state, action) => {
      state.symptoms = action.payload;
    },
    setSeverity: (state, action) => {
      state.severity = action.payload;
    },
    setMedication: (state, action) => {
      state.medication = action.payload;
    },
    setInstructions: (state, action) => {
      state.instructions = action.payload;
    },
    setPatientList: (state) => {
      const NewPatient = {
        name: state.name,
        age: state.age,
        gender: state.gender,
        illness: state.illness,
        symptoms: state.symptoms,
        severity: state.severity,
        medication: state.medication,
        instructions: state.instructions,
        id: Date.now(),
      };
      const newPatientList = [...state.patientList, NewPatient];
      state.patientList = newPatientList;
    },
    deletePatient: (state, { payload }) => {
      state.patientList = state.patientList.filter(({ id }) => id !== payload);
    },
  },
});

export const {
  setName,
  setAge,
  setGender,
  setIllness,
  setInstructions,
  setMedication,
  setMessageToDoctor,
  setMessageToPatient,
  setSeverity,
  setSymptoms,
  setPatientList,
  deletePatient,
} = PatientInfoSlice.actions;

export default PatientInfoSlice.reducer;
