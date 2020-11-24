import React from "react";

const Tweet = (props) => {
  return (
    <div className="tweet">
      <h2>{props.name}</h2>
      <p>{props.message}</p>
      <button>Edit</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
