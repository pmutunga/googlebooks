import React from "react";
import "./DeleteButton.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    <span className="delete-btn btn btn-outline-danger" {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default DeleteButton;

// function Button({ type = "default", className, children, onClick }) {
//   return (
//     <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
//       {children}
//     </button>
//   );
// }
