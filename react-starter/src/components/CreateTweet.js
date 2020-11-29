import React, { useState } from "react";

const CreateTweet = () => {
  // State
  const [textInput, setTextInput] = useState("");
  // create empty array to hold data when hit submit button
  const [tweets, setTweets] = useState([]);

  // Functions
  // change function to get user input
  const userInputHander = (e) => {
    setTextInput(e.target.value);
  };
  const submitFunction = (e) => {
    e.preventDefault();
    console.log("hii");
    // spread operator, clone the array and add the textInput
    setTweets([...tweets, textInput]);
    setTextInput("");
  };
  return (
    <form onSubmit={submitFunction} action="">
      <textarea
        value={textInput}
        onChange={userInputHander}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
