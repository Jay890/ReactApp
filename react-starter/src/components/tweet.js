import React from "react";

const Tweet = ({ name, message }) => {
  const tweetDate = "24/11/2020";

  return (
    <div className="tweet">
      <h2>{name}</h2>
      <p>{message}</p>
      <button>Edit</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
