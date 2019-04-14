import React from "react";
import AudioPlayer from "react-playlist-player";
import "./Player.css";

const $ = window.jQuery;

class Player extends React.Component {
  state = {
    isStreaming: true,
    currentSong: "",
    currentPlayList: {}
  };

  componentDidMount = () => {
    var isStreaming;
    var dJHubProxy = $.connection.dJHub;
    $.connection.hub.url = `${process.env.REACT_APP_SIGNALR_URL}`;
    dJHubProxy.client.sendSongOne = function(one, url) {
      if (one >= 1) {
        this.loadPlayList(url);
      }
    }.bind(this);

    $.connection.hub.start().done(function() {
      console.log("Connected!");
    });
  };

  loadPlayList = url => {
    var currentPlayList = {
      playlistCoverUrl: "path/to/coverUrl",
      playlistName: "playlist name",
      bandName: "J. Cole",
      songs: [
        {
          position: "1",
          songName: "Middle Child",
          songUrl: url
        }
      ],
      type: "album"
    };
    this.setState({ currentPlayList: currentPlayList, isStreaming: true });
  };

  render() {
    return this.state.isStreaming === true ? (
      <div className="playercontainer">
        <div className="row playerimage">
          <div className="col-12">
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
          </div>
        </div>

        <div className="row playercontrols">
          <div className="col-12">
            <div className={"Demo"}>
              <AudioPlayer
                currentPlayList={this.state.currentPlayList}
                onToggle={({ audioPlaying }) => console.log({ audioPlaying })}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>Streamer is offline!</div>
    );
  }
}

export default Player;
