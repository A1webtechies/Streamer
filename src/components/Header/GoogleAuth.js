import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions/index";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "320273903022-90oiuqgmr241v93rd471l1qngv60dgja.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthBtn = () => {
    if (this.props.isSignedIn === null) {
      return <div>Loading....</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="waves-effect waves-light btn-small white red-text"
        >
          <i className="fab fa-google left " style={{ lineHeight: "30px" }}></i>
          SignOut
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="waves-effect waves-light btn-small white teal-text"
        >
          <i className="fab fa-google left " style={{ lineHeight: "30px" }}></i>
          SignIn
        </button>
      );
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

const mapSateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapSateToProps,
  { signIn, signOut }
)(GoogleAuth);
