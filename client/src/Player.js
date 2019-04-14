import React from "react";
import AudioPlayer from "react-playlist-player";
import "./Player.css";

const $ = window.jQuery;

class Player extends React.Component {
  state = {
    isStreaming: false,
    currentSong: "",
    currentPlayList: {}
  };

  componentDidMount = () => {
    var dJHubProxy = $.connection.dJHub;
    $.connection.hub.url = "http://localhost:3001/signalr";
    dJHubProxy.client.sendSongOne = function(one, url) {
      this.setState({
        isStreaming: true,
        currentSong: one,
        currentPlayList: {
          songs: [
            {
              songUrl: url
            }
          ]
        }
      });
    };

    $.connection.hub.start().done(function() {
      console.log("Connected!");
    });
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
