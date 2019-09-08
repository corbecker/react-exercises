import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_STREAMS, GET_STREAM, DELETE_STREAM, UPDATE_STREAM } from './types'
import streams from '../apis/streams';

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
  return async (dispatch) => {
    const response = await streams.post('/streams', formValues);
    //send off to reducer
    dispatch({ type: CREATE_STREAM, payload: response.data });
  };
};

export const getStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/stream/${id}`);
    dispatch({ type: GET_STREAM, payload: response.data });
  };
};

export const getStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');
    dispatch({ type: GET_STREAMS, payload: response.data });
  };
};

export const updateStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({ type: UPDATE_STREAM, payload: response.data });
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    const response = await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id })
  };
};