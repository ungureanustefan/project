import { configureStore } from "@reduxjs/toolkit";
import PatientInfoReducer from "./slices/PatientInfoSlice";

export default configureStore({
  reducer: {
    patient: PatientInfoReducer,
  },
});
