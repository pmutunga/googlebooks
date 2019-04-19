import React from "react";
import "./style.css";

// function Jumbotron({ children }) {
//   return (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
// }

function Jumbotron() {
  return(
  <div className="jumbotron text-center">
  <div className = "textWrapper">
    <h1 className="display-4">React Google Books Search</h1>
    <p className="lead">
      Search for and Save Books of Interest.
    </p>
    <hr />
    <p className="small">
      <a href="https://books.google.com/">Powered by Google Books</a>
    </p>
    </div>
  </div>
  )
}
export default Jumbotron;
