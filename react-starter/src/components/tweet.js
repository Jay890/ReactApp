import React, { useEffect } from "react";
import "../styles/Tweet.scss";

const Tweet = ({ name, tweets, setTweets, tweet }) => {
  const tweetDate = "24/11/2020";
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };

  useEffect(() => {
    console.log("we ran a function");
  }, []);

  return (
    <div className="tweet">
      <h2>{name}</h2>
      <p>{tweet.message}</p>
      <button>Like</button>
      <button onClick={deleteTweet}>Delete</button>
    </div>
  );
};

export default Tweet;
