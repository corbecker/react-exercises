import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

  componentDidMount() {

    //action creator call to JSONPlaceholder API

  }

  render() {
    return <div>posts</div>
  }
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps, { fetchPosts })(PostList);