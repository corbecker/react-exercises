import React from 'react';
import ReactDOM from 'react-dom';
import useLocation from './useLocation';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//location user and current month
//pass season to seasondisplay component

const App = () => {
  const [lat, errorMessage] = useLocation();

  if (errorMessage && !lat) {
    return <div>Error: {errorMessage}</div>
  }
  if (!errorMessage && lat) {
    return <SeasonDisplay lat={lat} />
  }

  return <Spinner message="Please accept location request." />

}

ReactDOM.render(<App />, document.querySelector('#root'));
