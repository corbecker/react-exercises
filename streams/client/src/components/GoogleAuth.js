import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {

    // arrow function called when library has been loaded
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '902314768550-nlif2i9bkidppflna15j8mrk79mm78se.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <a onClick={this.onSignOutClick} className="ui item">
          <i className="google icon"></i>
          Sign Out
        </a>
      );
    } else {
      return (
        <a onClick={this.onSignInClick} className="ui item">
          <i className="google icon"></i>
          Sign In
        </a>
      )
    };
  };

  render() {
    return <div>{this.renderAuthButton()}</div>
  };
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {
  signIn,
  signOut
})(GoogleAuth);