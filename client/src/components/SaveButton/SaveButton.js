import React from "react";
import "./SaveButton.css";


// // The ...props means, spread all of the passed props onto this element
// // That way we don't have to define them all individually
// function SaveButton(props) {
//   return (
//     <span  className="save-btn btn btn-outline-primary" {...props} role="button" tabIndex="0">
//       Save
//     </span>
//   );
// }

// export default SaveButton;

// import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function saveButton({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default saveButton;
