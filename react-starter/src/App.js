import React from "react";
// Import Component
import TestComponent from "./TestComponent";

function App() {
  // simple JS code
  const items = [1, 2, 3, 4, 5];

  items.map((item) => {
    console.log(item);
  });

  // JSX code
  return (
    <div className="box">
      <h1>Hello React</h1>
      <TestComponent />
      <button>Submit</button>
    </div>
  );
}

export default App;
