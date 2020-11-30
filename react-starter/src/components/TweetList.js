import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets }) => {
  return (
    <div className="tweet-list">
      <h2 value={tweets}>ff</h2>
      <Tweet name={name} tweets={tweets} />
      <Tweet name={name} tweets={tweets} />
      <Tweet name={name} tweets={tweets} />
    </div>
  );
};

export default TweetList;
