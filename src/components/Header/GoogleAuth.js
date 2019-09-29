import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      this.auth = window.gapi.client
        .init({
          clientId:
            "320273903022-90oiuqgmr241v93rd471l1qngv60dgja.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthBtn = () => {
    if (this.state.isSignedIn === null) {
      return <div>Loading....</div>;
    } else if (this.state.isSignedIn) {
      return (
        <button
          onClick={this.onSignOut}
          className="waves-effect waves-light btn-small white red-text"
        >
          <i className="fab fa-google left " style={{ lineHeight: "30px" }}></i>{" "}
          SignOut
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignIn}
          className="waves-effect waves-light btn-small white teal-text"
        >
          <i className="fab fa-google left " style={{ lineHeight: "30px" }}></i>{" "}
          SignIn
        </button>
      );
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

export default GoogleAuth;
