import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search/', {
      params: { q: term }
    });
    this.setState({ videos: response.data.items });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    )
  }
}

export default App;