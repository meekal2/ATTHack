import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {

  render() {
    return (
      <div className="fullSizeBGImage">
        <div className="row">
          <div className="col-12 mt-5 mb-1" align="center">
            <h2 style={{ color: "white" }}>Welcome to Vcheck Global</h2>
          </div>
          <div className="col-12" align="center">
            <Link to="/login">
              <button type="button" className="btn btn-info">
                Login here!
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
