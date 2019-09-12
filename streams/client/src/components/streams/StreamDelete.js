import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream, getStream } from '../../actions';
import { connect } from 'react-redux';
import StreamList from './StreamList';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  close = () => {
    history.push('/');
  }

  deleteStream = () => {
    this.props.deleteStream(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <>
        <Link to={'/'} className="ui button">Cancel</Link>
        <button onClick={() => this.deleteStream()} className="ui button negative">Delete</button>
      </>
    )
  }

  renderTitle = () => {
    if (!this.props.stream) {
      return (
        'Delete Stream'
      )
    }
    return (
      `Delete Stream: ${this.props.stream.title}`
    )
  }

  render() {
    return (
      <div>
        <StreamList></StreamList>
        <Modal
          header={this.renderTitle()}
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => this.close()}
        ></Modal>
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};

export default connect(mapStateToProps, { deleteStream, getStream })(StreamDelete);