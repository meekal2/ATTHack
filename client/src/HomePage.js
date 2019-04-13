import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  state = {
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    logInSuccess: false,
    disabled: false,
    validationHasRun: false
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
                    disabled={this.state.disabled ? "disabled" : ""}
                    required
                    aria-invalid="false"
                    onChange={e => {
                      this.setState({
                        email: e.target.value,
                        emailError: ""
                      });
                    }}
                  />
                  <div className="form-control-position">
                    <i className="ft-user" />
                  </div>
                  {this.state.emailError && (
                    <label
                      id="email-error"
                      className="error"
                      htmlFor="email"
                      style={{ display: "inline-block" }}
                    >
                      {this.state.emailError}
                    </label>
                  )}
                </fieldset>
                <fieldset className="form-group position-relative has-icon-left validate">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    className="form-control round"
                    onKeyDown={e => this.keyHandler(e.keyCode)}
                    disabled={this.state.disabled ? "disabled" : ""}
                    required
                    aria-invalid="false"
                    onChange={e => {
                      this.setState({
                        password: e.target.value,
                        passwordError: ""
                      });
                    }}
                  />
                  <div className="form-control-position">
                    <i className="ft-lock" />
                  </div>
                  {this.state.passwordError && (
                    <label
                      id="password-error"
                      className="error"
                      htmlFor="password"
                      style={{ display: "inline-block" }}
                    >
                      {this.state.passwordError}
                    </label>
                  )}
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
                    id="loginBtn"
                    className="btn round btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1"
                  >
                    <strong>LOGIN</strong>
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
