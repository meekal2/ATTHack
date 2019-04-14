import React from "react";
import DJDashboard from "./DJDashboard";
import StreamList from "./StreamList";

class Dashboard extends React.Component {
  render() {
    // return this.props.userId === 1 ? <DJDashboard /> : <StreamList />;
    return <StreamList />;
  }
}

export default Dashboard;
