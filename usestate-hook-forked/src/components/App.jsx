import React, { useState } from "react";

function App() {
  const [count,setCount]=useState(0)
  
  
  function icrease(){
    setCount(count+1)
  }

  function decrease(){
    setCount(count-1)
  }

  return(
  <div className="container">
  <h1>{count}</h1>
  <button onClick={decrease}>-</button>
  <button onClick={icrease}>+</button>
  </div>)
}

export default App;
