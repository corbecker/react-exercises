import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              name="search"
              value={this.state.term}
              placeholder="Search for a video..."
              onChange={(e) => this.setState({ term: e.target.value })}>
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;