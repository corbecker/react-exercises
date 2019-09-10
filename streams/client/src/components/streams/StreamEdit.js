import React from 'react';
import { connect } from 'react-redux';

import { getStream } from '../../actions';

class StreamEdit extends React.Component {

  // In react router every component should fetch its own data
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props)
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <h3>{this.props.stream.title}</h3>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  //ownProps is a reference to the props object that appears inside the component
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { getStream })(StreamEdit);