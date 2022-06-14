// Import packages
import React from "react";

// Import image
import Left from "../../../images/left.svg";

// Import styled component
import { Img } from "./LeftImage.elements";

function LeftImage() {
  return (
    <div>
      <Img src={Left} alt="Left Image" />
    </div>
  );
}

export default LeftImage;
