import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_STREAMS, GET_STREAM, DELETE_STREAM, UPDATE_STREAM } from './types'
import streams from '../apis/streams';
import history from '../history';

// Sign In called after successful sign in
export const signIn = (id) => {
  return {
    type: SIGN_IN,
    payload: id
  };
};

//Sign Out
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });
    //send off to reducer
    dispatch({ type: CREATE_STREAM, payload: response.data });

    // Programatic navigation back to the homepage
    history.push('/');
  };
};

export const getStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: GET_STREAM, payload: response.data });
};

export const getStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');
  dispatch({ type: GET_STREAMS, payload: response.data });
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: UPDATE_STREAM, payload: response.data });
    history.push('/');
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/');
  };
};