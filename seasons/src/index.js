import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

//location user and current month
//pass season to seasondisplay component

const App = () => {


  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    err => console.log(err)
  );

  return (
    <div>
      <SeasonDisplay />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
