import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h2>Create Stream</h2>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    )
  };
};

export default connect(null, { createStream })(StreamCreate);