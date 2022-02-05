// State is a object  that stores some data as like variables. But in react we dont used variables just because variables cannt update the component data but state will.

// State is a object that is used to represents information about the -component current situation

import React, { useState } from "react";

const ReactState = () => {
  const [data, setData] = useState("Sattyam");
  function updated() {
    setData("Shivam");
  }
  return (
    <>
      <div className="container">
        <h1>Hello {data}</h1>
        <button onClick={updated}>Click here to update state</button>
      </div>
    </>
  );
};

export default ReactState;
