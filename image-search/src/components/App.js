import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 9a1997ae17d6d322388a14eb234585912295f5a863959d2dfc1803cc2b98d1f2'
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;