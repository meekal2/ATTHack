import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  buttonClicked = e => {
    e.preventDefault();
    this.logIn();
  };

  keyHandler = keyCode => {
    if (keyCode === 13) {
      this.logIn();
    }
  };

  logIn = () => {
    this.props.history.push({
      pathname: "/dashboard",
      state: { userId: this.state.email }
    });
  };

  render() {
    return (
      <div className="row justify-content-center align-items-center fullSizeBGImage">
        <div className="col p-0 logged-out-container" align="center">
          <div className="card-content">
            <div className="card-body">
              <div className="mb-1">
                <img
                  src="../../../app-assets/images/logo/logo.png"
                  alt="branding logo"
                  width="150"
                  height="150"
                />
              </div>
              <div className="font-large-1 mb-1">Member Login</div>
              <form className="form-horizontal" noValidate>
                <fieldset className="form-group position-relative has-icon-left validate">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    className="form-control round"
                    onChange={e => {
                      this.setState({
                        email: e.target.value
                      });
                    }}
                  />
                  <div className="form-control-position">
                    <i className="ft-user" />
                  </div>
                </fieldset>
                <fieldset className="form-group position-relative has-icon-left validate">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    className="form-control round"
                    onKeyDown={e => this.keyHandler(e.keyCode)}
                    onChange={e => {
                      this.setState({
                        password: e.target.value
                      });
                    }}
                  />
                  <div className="form-control-position">
                    <i className="ft-lock" />
                  </div>
                </fieldset>
                <div className="form-group row">
                  <div className="col-md-6 col-12 text-center text-sm-left" />
                  <div className="col-md-6 col-12 float-sm-left text-center text-sm-right">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                </div>

                <div className="form-group text-center">
                  <button
                    type="button"
                    onClick={this.buttonClicked}
                    className="btn round btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1"
                  >
                    <strong>
                      <Link to="/dashboard">LOGIN</Link>
                    </strong>
                  </button>
                </div>
              </form>
            </div>
            <p className="float-sm-center text-center">
              Don’t have an account?
            </p>
            <Link to="/register">
              <p className="text-center">Sign up!</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
