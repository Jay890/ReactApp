import React, { useState } from "react";
// Import Component
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import s from "./styles/App.module.css";

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
      <h2 className={s.title}>Twitter Light</h2>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList
        setName={setName}
        name={name}
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;
