// Import packages
import React, { useState } from "react";
import { Navbar } from "./app/components/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Import pages

import {
  Homepage,
  CovidNews,
  PatientList,
  LoginDoctor,
  AddPatient,
} from "./app/pages/index";

// Component: App
function App() {
  const [login, setLogin] = useState(true);

  return (
    <div>
      {login === true ? (
        <div>
          <LoginDoctor setLogin={() => setLogin(false)} />
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Navbar setLogin={() => setLogin(true)} />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/Add-Patient" element={<AddPatient />} />
              <Route exact path="/Patient-List" element={<PatientList />} />
              <Route exact path="/Covid-News" element={<CovidNews />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
