import React from 'react';
import { connect } from 'react-redux';
import { getStreams } from '../../actions';

class StreamList extends React.Component {

  componentDidMount() {
    this.props.getStreams();
    console.log(this.props.streams)
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">{stream.title}</div>
          <div className="content">{stream.description}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  // Object.values takes an object and turns into array
  return { streams: Object.values(state.streams) };
}

export default connect(mapStateToProps, { getStreams })(StreamList);