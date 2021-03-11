//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
var timeText = "Good Morning";
var customStyles={color:"red"}
const currentDate = new Date();
const currentTime = currentDate.getHours();
if (currentTime >= 0 && currentTime <= 12) {
timeText="Good Morning";
customStyles.color="red";
}else if(currentTime>12 && currentTime<18){
  timeText="Good Afternoon";
  customStyles.color="green";
}else{
  timeText="Good Evening";
  customStyles.color="blue";
}
ReactDOM.render(<h1 className="heading" style={customStyles}>{timeText}</h1>, document.querySelector("#root"));
