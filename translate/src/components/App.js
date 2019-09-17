import React from 'react';
import '../styles/style.css'
import UserCreate from './UserCreate';

class App extends React.Component {

  state = { language: 'english' };

  onLanguageChange = language => {
    console.log('click')
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container mt">
        Select a language:
        <i className="flag us" onClick={() => this.onLanguageChange('english')} />
        <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        <UserCreate />
      </div>
    )
  };
};

export default App;