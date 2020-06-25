import { ReducerAction } from '../types'

const initialState = {
  loading: false,
  message: undefined,
  error: '',
}
export const rememberPassReducer = (state = initialState, action: ReducerAction) => {
  switch (action.type) {
    case 'GET_REMEMBER_PASS': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_REMEMBER_PASS': {
      return {
        ...state,
        loading: false,
        message: action.payload,
      }
    }
    case 'ERROR_REMEMBER_PASS': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case 'CLEAN_REMEMBER_PASS': {
      return {
        loading: false,
        message: undefined,
        error: '',
      }
    }
    default: {
      return state
    }
  }
}
