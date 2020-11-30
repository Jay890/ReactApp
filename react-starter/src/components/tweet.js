import React from "react";

const Tweet = ({ name, tweets }) => {
  const tweetDate = "24/11/2020";

  return (
    <div className="tweet">
      <h2>{name}</h2>
      <p>{tweets}</p>
      <button>Edit</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
