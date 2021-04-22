import React, { useState } from "react";

function App() {
  const [name,setName]=useState("")
  const [submitPressed,setSubmit]=useState(false)
  function displayName(){
    setSubmit(true)
  }
  function handleChange(event){
    setSubmit(false)
    setName(event.target.value)
    }
  return (
    <div className="container">
      <h1>Hello {submitPressed? name:""}</h1>
      <input type="text" 
      placeholder="What's your name?"
      onChange={handleChange} 
      value={name}/>
      <button onClick={displayName}>Submit</button>
    </div>
  );
}

export default App;
