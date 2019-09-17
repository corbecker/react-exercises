import React from 'react';
import '../styles/style.css'
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class App extends React.Component {

  state = {
    language: 'english',
    colour: 'blue'
  };

  onLanguageChange = language => {
    this.setState({ language });
  }


  render() {
    return (
      <div className="ui container mt">
        Select a language:
        <i className="flag us" onClick={() => this.onLanguageChange('english')} />
        <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        <LanguageContext.Provider value={this.state.language}>
          <ColourContext.Provider value={this.state.colour}>
            <UserCreate />
          </ColourContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  };
};

export default App;