import React, { useState } from "react";

// Import Main Styles
import "./styles/app.scss";
//Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

// util
import chillHop from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
