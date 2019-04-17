import React from "react";
import "./SaveButton.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveButton(props) {
  return (
    <span className="save-btn btn btn-outline-success" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export default SaveButton;

