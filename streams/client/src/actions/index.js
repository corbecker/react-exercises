import { SIGN_IN, SIGN_OUT } from './types'
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
    streams.post('/streams', formValues);
  };
};