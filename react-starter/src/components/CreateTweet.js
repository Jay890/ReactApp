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
        name=""
        id=""
        cols="50"
        rows="5"
      ></textarea>
      <h1 onClick={() => setTextInput("")}>{textInput}</h1>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
