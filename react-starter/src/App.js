import React, { useState } from "react";
// Import Component
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  // simple JS code e.g variables, functions
  const name = "Kpop";
  const message = "I listen to Kpop music";
  // JSX code
  return (
    <div className="box">
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
