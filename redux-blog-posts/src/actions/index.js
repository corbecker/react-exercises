import JSONPlaceholder from '../apis/JSONPlaceholder';

export const fetchPosts = async () => async dispatch => {
  const response = await JSONPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response });
};