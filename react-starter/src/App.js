import React from "react";
// Import Component
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  // simple JS code e.g variables, functions

  const name = "Someone";
  const message = "This is the actual tweet, enjoy!";

  // create click function
  const sayHelloHandler = (user) => {
    console.log(`Welcome ${user} do you wish to start the game?`);
  };
  // JSX code
  return (
    <div className="box">
      <h1>Hello React</h1>
      <button onClick={() => sayHelloHandler("Bob")}>Click</button>
      {/* <CreateTweet />
      <TweetList name={name} message={message} /> */}
    </div>
  );
}

export default App;
