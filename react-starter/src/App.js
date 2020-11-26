import React, { useState } from "react";
// Import Component
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  // simple JS code e.g variables, functions

  // let name = "Kpop music";
  const [name, setNames] = useState("Music");

  // create click function
  const sayHelloHandler = (e) => {
    setNames("Kpop Music");
    console.log(name);
  };
  // JSX code
  return (
    <div className="box">
      <h1>Hello {name}</h1>
      <button onClick={sayHelloHandler}>Click</button>
      {/* <CreateTweet />
      <TweetList name={name} message={message} /> */}
    </div>
  );
}

export default App;
