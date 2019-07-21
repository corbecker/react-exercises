import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
  state = {
    videos: []
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search/', {
      params: { q: term }
    });
    this.setState({ videos: response.data.items });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    )
  }
}

export default App;