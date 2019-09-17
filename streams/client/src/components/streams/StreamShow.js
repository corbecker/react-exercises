import React from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions';


class StreamShow extends React.Component {

  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h2>{this.props.stream.title}</h2>
        <h5>{this.props.stream.description}</h5>
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { getStream })(StreamShow);