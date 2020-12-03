import React from "react";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
    </div>
  );
};

export default Player;
