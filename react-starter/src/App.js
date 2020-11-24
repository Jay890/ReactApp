import React from "react";
// Import Component
import TestComponent from "./TestComponent";
import CreateTweet from "./components/CreateTweet";
import Tweet from "./components/Tweet";

function App() {
  // simple JS code e.g variables, functions
  // const items = [1, 2, 3, 4, 5];

  // items.map((item) => {
  //   console.log(item);
  // });

  const name = "Someone";
  const message = "This is the actual tweet, enjoy!";
  // JSX code
  return (
    <div className="box">
      <h1>Hello React</h1>
      <TestComponent />
      <Tweet name={name} message={message} />
      <CreateTweet />
      <Tweet />
      <h1>{name}</h1>
    </div>
  );
}

export default App;
