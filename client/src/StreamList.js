import React from "react";
import Player from "./Player";
import "./streamlist.css";

class StreamList extends React.Component {
  state = {
    moodMode: false,
    stationMode: true
  };
  toPlayer = e => {
    e.preventDefault();
    this.props.history.push("/player");
  };

  render() {
    return (
      <React.Fragment>
        {this.state.stationMode === true ? (
          <React.Fragment>
            <button
              onClick={() =>
                this.setState({ moodMode: true, stationMode: false })
              }
            >
              Stations
            </button>
            <div className="content-wrapper fullSizeBlackImage">
              <div className="content-body">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body card-dashboard">
                        <h5 className="card-header">Streaming Now</h5>
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                              <button
                                className="img-thumbnail"
                                width="640"
                                height="360"
                                onClick={e => this.toPlayer(e)}
                              />
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                              <iframe
                                className="img-thumbnail"
                                src="https://player.vimeo.com/video/271094088?color=ff9933&title=0&byline=0"
                                width="640"
                                height="360"
                              />
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                              <iframe
                                className="img-thumbnail"
                                src="https://player.vimeo.com/video/271492147?color=ff9933&title=0&byline=0"
                                width="640"
                                height="360"
                              />
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                              <iframe
                                className="img-thumbnail"
                                src="https://player.vimeo.com/video/267520931?color=ff9933&title=0&byline=0"
                                width="640"
                                height="360"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                              <iframe
                                className="img-thumbnail"
                                src="https://player.vimeo.com/video/263304806?title=0&byline=0"
                                width="640"
                                height="360"
                              />
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                              <iframe
                                className="img-thumbnail"
                                src="https://player.vimeo.com/video/262705319?color=ff9933&title=0&byline=0"
                                width="640"
                                height="360"
                              />
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                              <iframe
                                className="img-thumbnail"
                                src="https://player.vimeo.com/video/244405542?color=ff9933&title=0&byline=0"
                                width="640"
                                height="360"
                              />
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="embed-responsive embed-responsive-item embed-responsive-16by9">
                              <iframe
                                className="img-thumbnail"
                                src="https://player.vimeo.com/video/196300116?color=ff9933&title=0&byline=0"
                                width="640"
                                height="360"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          this.state.moodMode === true && (
            <React.Fragment>
              <button
                onClick={() =>
                  this.setState({ moodMode: false, stationMode: true })
                }
              >
                Moods
              </button>
              <br />
              <div className="buttonMargCenter">
                <button
                  className="btn btn-primary buttonMarg"
                  onClick={() => this.toPlayer()}
                >
                  mood 1
                </button>
                <br />
                <button
                  className="btn btn-primary buttonMarg"
                  onClick={() => this.toPlayer()}
                >
                  mood 1
                </button>
                <br />
                <button
                  className="btn btn-primary buttonMarg"
                  onClick={() => this.toPlayer()}
                >
                  mood 1
                </button>
                <br />
                <button
                  className="btn btn-primary buttonMarg"
                  onClick={() => this.toPlayer()}
                >
                  mood 1
                </button>
                <br />
                <button
                  className="btn btn-primary buttonMarg"
                  onClick={() => this.toPlayer()}
                >
                  mood 1
                </button>
                <br />
                <button
                  className="btn btn-primary buttonMarg"
                  onClick={() => this.toPlayer()}
                >
                  mood 1
                </button>
              </div>
            </React.Fragment>
          )
        )}
      </React.Fragment>
    );
  }
}

export default StreamList;
