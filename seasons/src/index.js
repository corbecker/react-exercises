import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//location user and current month
//pass season to seasondisplay component

const App = () => {

  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  useEffect(() => {
    console.log('component was updated')
  }, [lat]);


  if (errorMessage && !lat) {
    return <div>Error: {errorMessage}</div>
  }
  if (!errorMessage && lat) {
    return <SeasonDisplay lat={lat} />
  }

  return <Spinner message="Please accept location request." />

}

ReactDOM.render(<App />, document.querySelector('#root'));
