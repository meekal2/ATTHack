import React from "react";
import DJDashboard from "./DJDashboard";
import StreamList from "./StreamList";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        {this.props.location.state.userId === 1 ? (
          <DJDashboard />
        ) : (
          <StreamList />
        )}
      </div>
    );
  }
}

export default Dashboard;
