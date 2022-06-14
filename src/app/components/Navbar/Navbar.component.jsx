// Import packages
import React from "react";
import { Link } from "react-router-dom";

// Import components
import Burger from "./Burger.component";

// Import styled components
import { Nav, Logo } from "./Navbar.elements";

// Import images
import Doctor from "../../../images/doctor.png";

function Navbar(props) {
  // Passing props to Burger component
  const logout = props.setLogin;

  return (
    <div>
      <Nav>
        <Logo>
          <img
            src={Doctor}
            style={{ width: "30px", height: "30px" }}
            alt="Doctor logo"
          />
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Patient List App
          </Link>
        </Logo>
        <Burger setLogin={logout} />
      </Nav>
    </div>
  );
}

export default Navbar;
