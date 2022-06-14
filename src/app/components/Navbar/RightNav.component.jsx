// Import packages
import React from "react";
import { Link } from "react-router-dom";

// Import styled components
import { Ul, Li, Anchor } from "./Navbar.elements";

function RightNav(props) {
  // Importing props from App.js to enable logout
  const logout = props.setLogin;
  // Importing props from Burger to open/close burger menu when link is clicked
  const setopen = props.setOpen;
  return (
    <Ul open={props.open}>
      <Link to="/">
        <Li onClick={setopen}>
          <Anchor>Homepage</Anchor>
        </Li>
      </Link>
      <Link to="/Add-Patient">
        <Li onClick={setopen}>
          <Anchor>Add Patient</Anchor>
        </Li>
      </Link>
      <Link to="/Patient-List">
        <Li onClick={setopen}>
          <Anchor>Patient List</Anchor>
        </Li>
      </Link>
      <Link to="/Covid-News">
        <Li onClick={setopen}>
          <Anchor>Covid News</Anchor>
        </Li>
      </Link>

      <Li onClick={logout} style={{ border: "none", cursor: "pointer" }}>
        <Anchor>Log Out</Anchor>
      </Li>
    </Ul>
  );
}

export default RightNav;
