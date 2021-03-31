import React, { useState } from "react";

function App() {

  var [time,setDate]=useState(Date());
  function timer(){
    setDate(
      time= new Date().toLocaleTimeString()
    )
  }
  setInterval(timer, 1000)
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timer}>Get Time</button>
    </div>
  );
}

export default App;
