import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

//location user and current month
//pass season to seasondisplay component

class App extends React.Component {

  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    console.log('component did mount')
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('component was updated')
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
