import React, { useState } from "react";

const CreateTweet = () => {
  // State
  const [textInput, setTextInput] = useState("");

  // Functions
  // change function to get user input
  const userInputHander = (e) => {
    // console.log(e.target.value);
    setTextInput(e.target.value);
  };

  return (
    <form action="">
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
