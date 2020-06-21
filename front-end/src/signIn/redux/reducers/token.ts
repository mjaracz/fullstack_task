import {ReducerTokenAction} from '../types';

const initialState = {
  loading: false,
  jwtToken: '',
  error: ''
}
export const signInReducer = (state = initialState, action: ReducerTokenAction) => {
  switch(action.type) {
    case 'GET_SIGN_IN': {
      return {
        ...state,
        loading: true
      }
    }
    case 'FETCH_SIGN_IN': {
      return {
        ...state,
        loading: false,
        jwtToken: action.payload
      }
    }
    case 'ERROR_SIGN_IN': {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case 'CLEAN_SIGN_IN': {
      return {
        loading: false,
        jwtToken: '',
        error: ''
      }
    }
    default: {
      return state
    }
  }
}