import React from "react";
import AudioPlayer from "react-playlist-player";
// import Song1 from "./audio/file1";
import "./Player.css";

class Player extends React.Component {
  state = {
    isStreaming: true,
    currentPlayList: {}
  };
  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: "path/to/coverUrl",
        playlistName: "playlist name",
        bandName: "J. Cole",
        songs: [
          {
            position: "1",
            songName: "Middle Child",
            songUrl:
              "https://s3-us-west-1.amazonaws.com/djapp-files/09.+J.+Cole+-+MIDDLE+CHILD.mp3"
          }
        ],
        type: "album"
      }
    });

  componentDidMount = () => {
    if (this.state.isStreaming === true) {
      this.loadPlayList();
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="background">
          {this.state.isStreaming === true ? (
            <React.Fragment>
              <div className={"Demo"}>
                <button
                  className={"Demo__load-btn"}
                  onClick={this.loadPlayList}
                >
                  load playlist
                </button>
                <AudioPlayer
                  currentPlayList={this.state.currentPlayList}
                  onToggle={({ audioPlaying }) => console.log({ audioPlaying })}
                />
              </div>
              <div className="music-card-container">
                <div className="music-card playing">
                  <div className="image" />

                  <div className="wave" />
                  <div className="wave" />
                  <div className="wave" />

                  <div className="info">
                    <h2 className="title">Anomaly</h2>
                    <div className="artist">Lecrae</div>
                  </div>
                </div>

                <i className="fa fa-pause trigger" aria-hidden="true" />
                <i className="fa fa-play trigger" aria-hidden="true" />
              </div>
            </React.Fragment>
          ) : (
            <div>Streamer is offline!</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Player;
