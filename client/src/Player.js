import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Song1 from "./audio/file1";

class Player extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
        </div>
      </React.Fragment>
    );
  }
}

export default Player;
