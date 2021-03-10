import React from "react";
import ReactDOM from "react-dom";

const customeStyles={
  color:"red",
  fontSize:"28px",
  textAlign:"center"
};

if(3>1){
  customeStyles.color="blue";
  customeStyles.fontSize="80px"
}
ReactDOM.render(<h1 style={customeStyles}>Hello World!</h1>, document.getElementById("root"));
