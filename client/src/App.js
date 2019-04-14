import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Player from "./Player";
import StreamList from "./StreamList";
import Test from "./test";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/player" component={Player} />
          <Route exact path="/wstest" component={Test} />
          <Route exact path="/stream" component={StreamList} />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
