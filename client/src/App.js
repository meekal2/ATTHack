import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Player from "./Player";
import StreamList from "./StreamList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/player" component={Player} />
        <Route exact path="/stream" component={StreamList} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
