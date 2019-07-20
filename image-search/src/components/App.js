import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

  state = {
    results: null
  }

  onSearchSubmit = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 9a1997ae17d6d322388a14eb234585912295f5a863959d2dfc1803cc2b98d1f2'
      },
    });
    this.setState({ results: response.data.results });
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