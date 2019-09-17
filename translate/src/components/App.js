import React from 'react';
import '../styles/style.css'
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {

  state = { language: 'english' };

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
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    )
  };
};

export default App;