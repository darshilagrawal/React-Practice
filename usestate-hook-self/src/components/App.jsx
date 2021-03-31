import React, { useState } from "react"

function App(){
  const [currentState,incrementer]=useState(1)
  
  function increase(){
    incrementer(currentState+1);
  }

  function decrease(){
    incrementer(currentState-1);
  }

  return (
    <div><h1>{currentState}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </div>
  )
}

export default App