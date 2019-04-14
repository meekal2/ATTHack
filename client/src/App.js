import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Player from "./Player";
import Test from "./test";

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
