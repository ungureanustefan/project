// Import packages
import React from "react";
// Import styled components
import { Img } from "./RightImage.elements";

// Import images
import Right from "../../../images/right.svg";

function RightImage() {
  return (
    <div>
      <Img src={Right} alt="Right Image" />
    </div>
  );
}

export default RightImage;
