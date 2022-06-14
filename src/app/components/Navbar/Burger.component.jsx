// Import packages
import React, { useState } from "react";

// Import components
import RightNav from "./RightNav.component";

// Import styled components
import { StyledBurger } from "./Navbar.elements";

function Burger(props) {
  // Create local state for burger navbar to work
  const [open, setOpen] = useState(false);

  // Import props passed from App.js to enable "log out"
  const logout = props.setLogin;
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={() => setOpen(!open)} setLogin={logout} />
    </>
  );
}

export default Burger;
