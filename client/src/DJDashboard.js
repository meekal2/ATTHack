import React from "react";

class DJDashboard extends React.Component {
  render() {
    return (
      <div className="content-wrapper fullSizeBlackImage">
        <div className="content-body">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body card-dashboard">
                  <h5 className="card-header">DJ Dashboard</h5>
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-header ">
                          <a className="heading-elements-toggle">
                            <i className="ft-upload btn-file-input" />
                          </a>
                          <div className="heading-elements">
                            <ul className="list-inline mb-0">
                              <li>
                                <a data-action="reload">
                                  <i className="ft-rotate-cw" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body text-center">
                            <div className="card-header pt-0 pb-0">
                              <p className="info darken-2">Total Projects</p>
                              <h3 className="display-4 blue-grey lighten-1">
                                3,527
                              </h3>
                            </div>
                            <div className="card-content">
                              <div
                                id="new-projects"
                                className="height-150 newProjectsdonutShadow"
                              />
                              <ul className="list-inline clearfix mt-2">
                                <li>
                                  <h1 className="blue-grey lighten-1 text-bold-400">
                                    526
                                  </h1>
                                  <span className="info darken-2">
                                    <i className="ft-upload btn-file-input" />{" "}
                                    Average New Projects
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DJDashboard;
