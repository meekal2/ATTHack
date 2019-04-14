import React from "react";

const $ = window.jQuery;
var formData = new FormData();

class DJDashboard extends React.Component {
  state = {
    songs: [],
    live: false
  };

  componentDidMount = () => {
    var dJHubProxy = $.connection.dJHub;
    console.log();
    $.connection.hub.url = "http://localhost:3001/signalr";
    dJHubProxy.client.sendSongOne = function(one, url) {
      console.log(url);
    };
    $.connection.hub.start().done(function() {
      console.log("Connected!");
    });
  };

  handleDocumentUpload = files => {
    const chosenCaseData = new FormData();
    let newSongs = this.state.songs;
    for (let key in files) {
      if (!isNaN(key)) {
        chosenCaseData.append("document", files[key].name);
      }
    }
    for (let pair of chosenCaseData.entries()) {
      newSongs.push({
        fileName: pair[1]
      });
    }
    this.setState({ songs: newSongs, live: true });

    this.handleStreamStart(1);
  };

  handleStreamStart(track) {
    if (track === 1) {
      $.connection.dJHub.server.songOne(
        1,
        "https://s3-us-west-1.amazonaws.com/djapp-files/01.+Jonas+Brothers+-+Sucker.mp3"
      );
    }

    if (track === 2) {
      $.connection.dJHub.server.songOne(
        2,
        "https://s3-us-west-1.amazonaws.com/djapp-files/02.+Ariana+Grande+-+7+rings.mp3"
      );
    }

    if (track === 3) {
      $.connection.dJHub.server.songOne(
        3,
        "https://s3-us-west-1.amazonaws.com/djapp-files/03.+Bruno+Mars%2C+Cardi+B+-+Please+Me.mp3"
      );
    }
  }

  songList = i => {
    return (
      <li key={i}>
        {this.state.songs[i].fileName}{" "}
        <button
          className="btn bg-cyan bg-lighten-3 box-shadow-4"
          onClick={this.handleStreamStart(i)}
        >
          <i className="ft-play" />
        </button>
      </li>
    );
  };

  render() {
    const displaySongs = [];
    if (this.state.songs) {
      for (let i = 0; i < this.state.songs.length; i++) {
        displaySongs.push(this.songList(i));
      }
    }

    return (
      <div className=" djcontainer">
        <div
          className="row justify-content-center align-items-center upload fullSizeNoImage"
          align="center"
          style={{ backgroundColor: "black" }}
        >
          {this.state.live === true && (
            <div className="liveNow-container">
              <div className="inner" />
            </div>
          )}
          <div className="col-12">
            <div className="file-input-wrapper">
              <label className="btn btn-warning" htmlFor="outerFileUpload">
                {this.state.live ? "Select next file" : "Select File to Stream"}
              </label>
              <input
                id="outerFileUpload"
                className="fileUploadBtn"
                type="file"
                onChange={e => {
                  this.handleDocumentUpload(e.target.files);
                }}
                multiple
              />
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center align-items-center playlist fullSizeBlackImage"
          align="center"
        >
          <div className="col-12">
            {/* <pre>{JSON.stringify(this.state, null, 3)}</pre> */}
            <ul>{displaySongs}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DJDashboard;
