import { SIGN_IN, SIGN_OUT } from './types'

// Sign In called after successful sign in
export const signIn = (id) => {
  console.log(id)
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