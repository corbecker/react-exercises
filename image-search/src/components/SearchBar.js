import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" name="search" value={this.state.term} onChange={this.handleChange}></input>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;