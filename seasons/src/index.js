import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

//location user and current month
//pass season to seasondisplay component

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      err => console.log(err)
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <SeasonDisplay />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
