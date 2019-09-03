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
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Not sure if signed in.</div>
    } else if (this.state.isSignedIn) {
      return <div>Signed in.</div>
    } else {
      return <div>Not signed in.</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  };
};

export default GoogleAuth;