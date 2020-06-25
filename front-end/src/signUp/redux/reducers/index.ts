import { ReducerSignUpAction } from '../types'

const initialState = {
  loading: false,
  addedUser: {},
  error: '',
}
export const signUpReducer = (state = initialState, action: ReducerSignUpAction) => {
  switch (action.type) {
    case 'POST_SIGN_UP': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_SIGN_UP': {
      return {
        ...state,
        loading: false,
        addedUser: action.payload,
      }
    }
    case 'ERROR_SIGN_UP': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case 'CLEAN_SIGN_UP': {
      return {
        loading: false,
        addedUser: {},
        error: '',
      }
    }
    default: {
      return state
    }
  }
}
