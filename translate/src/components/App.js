import React from 'react';
import '../styles/style.css'
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

  state = {
    colour: 'blue'
  };

  render() {
    return (
      <div className="ui container mt">
        <LanguageStore>
          <LanguageSelector />
          <ColourContext.Provider value={this.state.colour}>
            <UserCreate />
          </ColourContext.Provider>
        </LanguageStore>
      </div>
    )
  };
};

export default App;