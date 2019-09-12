import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {

  close = () => {
    history.push('/');
  }

  deleteStream = () => {
    this.props.deleteStream(this.props.match.params.id);
    this.close();
  }

  actions = (
    <>
      <button onClick={() => { this.close() }} className="ui button">Cancel</button>
      <button onClick={() => this.deleteStream()} className="ui button negative">Delete</button>
    </>
  )
  render() {
    return (
      <Modal
        header={`Delete Stream: ${this.props.stream.title}`}
        content="Are you sure you want to delete this stream?"
        actions={this.actions}
        onDismiss={() => this.close()}
      ></Modal>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}



export default connect(mapStateToProps, { deleteStream })(StreamDelete);