// Import packages
import React, { useState } from "react";
// Import styled components
import { Header, MainHeader } from "./LoginDoctor.elements";
// Import images
import LoginImage from "../../../images/DoctorLogin.png";

function LoginDoctor(props) {
  // Local state: store "username"
  const [username, setUsername] = useState("");
  // Local state: store "password"
  const [password, setPassword] = useState("");

  const handleOnClick = () => {
    // Import props from App.js to log in/log ou
    const login = props.setLogin;
    // Perform JavaScript validation
    username !== "username"
      ? alert("Incorrect login details")
      : password !== "password"
      ? alert("Incorrect login details")
      : // Log in
        login();
  };

  return (
    <div>
      <Header>
        <MainHeader>
          <img
            src={LoginImage}
            alt=""
            style={{ width: "250px", marginTop: "10px" }}
          />
          <hr />
          <p>
            <input
              type="text"
              placeholder="Badge ID"
              name="badge-id"
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p>
            <button
              onClick={handleOnClick}
              style={{ fontSize: "1.2rem", borderBottom: "2px solid" }}
            >
              Log In
            </button>
          </p>
        </MainHeader>
      </Header>
    </div>
  );
}

export default LoginDoctor;
