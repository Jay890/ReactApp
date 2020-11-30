import React, { useState } from "react";
// Import Component
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  // simple JS code e.g variables, functions
  // state
  const [name, setName] = useState("Kpop");
  const [textInput, setTextInput] = useState("");
  // create empty array to hold data when hit submit button
  const [tweets, setTweets] = useState([]);
  // JSX code
  return (
    <div className="box">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList setName={setName} name={name} tweets={tweets} />
    </div>
  );
}

export default App;
