import React from "react";
import Cards from "./Cards"
import contacts from "../contacts"
function App() {
  return (
    <div>
      <h1 className="heading ">My Contacts</h1>
      <Cards 
      name={contacts[0].name}
      img={contacts[0].imgURL}
      tel={contacts[0].phone}
      email={contacts[0].email}
      />
      <Cards 
      name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].phone}
      email={contacts[1].email}
      />
      <Cards 
      name={contacts[2].name}
      img={contacts[2].imgURL}
      tel={contacts[2].phone}
      email={contacts[2].email}
      />
      
    </div>
  );
}

export default App;
