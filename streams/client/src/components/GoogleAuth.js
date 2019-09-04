import React from 'react';

class GoogleAuth extends React.Component {

  state = {
    isSignedIn: null
  };

  componentDidMount() {

    // arrow function called when library has been loaded
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '902314768550-nlif2i9bkidppflna15j8mrk79mm78se.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    console.log('auth changed')
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui google button">
          <i className="google icon"></i>
          Sign In
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  };
};

export default GoogleAuth;