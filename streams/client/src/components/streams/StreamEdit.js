import React from 'react';
import { connect } from 'react-redux';
import { getStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

  // In react router every component should fetch its own data
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render() {

    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm onSubmit={this.onSubmit} initialValues={{ title, description }}></StreamForm>
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  //ownProps is a reference to the props object that appears inside the component
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit);