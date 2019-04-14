import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Player from "./Player";
<<<<<<< HEAD
import StreamList from "./StreamList";
=======
import Test from "./test";
>>>>>>> refs/remotes/origin/master

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/player" component={Player} />
        <Route exact path="/stream" component={StreamList} />
      </React.Fragment>
=======
      <BrowserRouter>
        <React.Fragment>
          <div className="App">
            <Route path="/" component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/player" component={Player} />
            <Route path="/wstest" component={Test} />
          </div>
        </React.Fragment>
      </BrowserRouter>
>>>>>>> refs/remotes/origin/master
    );
  }
}

export default withRouter(App);
