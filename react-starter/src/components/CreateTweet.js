import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  // Functions
  // change function to get user input
  const userInputHander = (e) => {
    setTextInput(e.target.value);
  };
  const submitFunction = (e) => {
    e.preventDefault();
    console.log("hii");
    // spread operator, clone the array and add the textInput
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
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
