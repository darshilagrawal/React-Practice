import React from "react";
import ReactDOM from "react-dom";

const fname="Darshil";
const lname="Agrawal"
const luckyNumber=8
ReactDOM.render(<div>
  <h1>Hello {fname+" "+lname}!</h1>
  <p>My Lucky Number is {luckyNumber}</p>
  </div>
  , document.getElementById("root"));
  