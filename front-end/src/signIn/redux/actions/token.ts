import {ReqBody} from '../types';

export const getSignIn = (body: ReqBody) => ({
  type: 'GET_SIGN_IN',
  payload: body
});

export const clearSignIn = () => ({
  type: 'CLEAR_SIGN_IN'
});