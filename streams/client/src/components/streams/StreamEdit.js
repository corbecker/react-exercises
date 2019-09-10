import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {

  return (
    <h3>Edit Stream</h3>
  )
};

const mapStateToProps = (state, ownProps) => {
  //ownProps is a reference to the props object that appears inside the component
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps)(StreamEdit);