import React from 'react';
import { connect } from 'react-redux';
import { getStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

  componentDidMount() {
    this.props.getStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      )
    };
  };

  renderList() {
    if (!this.props.streams) {
      return <div>Loading...</div>
    }
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
            <div className="content">{stream.description}</div>
          </div>
        </div >
      )
    })
  }

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new" className="ui button primary">Create Stream</Link>
      )
    }
  }

  render() {
    return (
      <div>
        <h2 className="ui left floated header">Streams</h2>
        <div className="ui right floated header">{this.renderCreateButton()}</div>
        <div className="ui clearing divider"></div>
        <div className="ui very relaxed divided list">
          {this.renderList()}
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  // Object.values takes an object and turns into array
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { getStreams })(StreamList);