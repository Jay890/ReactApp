import React from "react";

const Tweet = ({ name, tweets, setTweets, tweet }) => {
  const tweetDate = "24/11/2020";
  const deleteTweet = () => {
    setTweets(tweets.filter((t) => t !== tweet));
  };
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <p>{tweet}</p>
      <button>Like</button>
      <button onClick={deleteTweet}>Delete</button>
    </div>
  );
};

export default Tweet;
