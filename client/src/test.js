import React, { Component } from "react";
const $ = window.jQuery;

export default class test extends Component {
  state = {
    lists: []
  };
  componentDidMount = () => {
    var dJHubProxy = $.connection.dJHub;
    console.log();
    $.connection.hub.url = "http://localhost:3000/signalr";
    dJHubProxy.client.sendSongOne = function(one, url) {
      console.log(url);
    };
    $.connection.hub.start().done(function() {
      console.log("Connected!");
    });
  };

  render() {
    return (
      <div>
        Hello{" "}
        <button
          onClick={() => {
            $.connection.dJHub.server.songOne(
              1,
              "https://s3-us-west-1.amazonaws.com/djapp-files/01.+Jonas+Brothers+-+Sucker.mp3"
            );
          }}
        >
          clickme
        </button>
      </div>
    );
  }
}
