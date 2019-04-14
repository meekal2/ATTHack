import React from "react";
import Player from "./Player";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import image6 from "./images/image6.jpeg";
import image7 from "./images/image7.jpeg";
import image8 from "./images/image8.jpeg";
import image9 from "./images/image9.jpeg";
import "./streamlist.css";

class StreamList extends React.Component {
  state = {
    moodMode: false,
    stationMode: true
  };
  toPlayer = () => {
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
            <br />
            <img className="thumbnail" src={image1} alt="" />
            <img className="thumbnail" src={image2} alt="" />
            <img className="thumbnail" src={image3} alt="" />
            <br />
            <img className="thumbnail" src={image4} alt="" />
            <img className="thumbnail" src={image5} alt="" />
            <img className="thumbnail" src={image6} alt="" />
            <br />
            <img className="thumbnail" src={image7} alt="" />
            <img className="thumbnail" src={image8} alt="" />
            <img className="thumbnail" src={image9} alt="" />
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
