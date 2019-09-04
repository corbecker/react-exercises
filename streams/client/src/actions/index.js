import { SIGN_IN, SIGN_OUT } from './types'

// Sign In called after successful sign in
export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

//Sign Out
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};