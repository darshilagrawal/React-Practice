import React, { useState } from "react";

function App() {
  const [isInside,setInside]=useState(false)
  var ourStyle=isInside?{backgroundColor:"black"}:{backgroundColor:"white"}
  function checkInside(){
    setInside(true)
  }
  function checkLeave(){
    setInside(false)
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={ourStyle} 
      onMouseOver={checkInside}
      onMouseOut={checkLeave} >Submit</button>
    </div>
  );
}

export default App;
