import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: '',
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              name="search"
              value={this.state.term}
              onChange={this.handleChange}>
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;